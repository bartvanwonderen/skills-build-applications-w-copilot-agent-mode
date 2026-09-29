import { useEffect, useState } from 'react'
import { fetchCollection } from '../lib/api.js'

function readField(record, keys) {
  for (const key of keys) {
    const value = key.split('.').reduce((current, part) => current?.[part], record)
    if (value !== undefined && value !== null && value !== '') return value
  }
  return null
}

function displayValue(value) {
  if (value === null) return '\u2014'
  if (Array.isArray(value)) {
    return value.map((item) => {
      if (typeof item !== 'object' || item === null) return item
      return item.name ?? item.username ?? item.email ?? 'Member'
    }).join(', ')
  }
  if (typeof value === 'object') {
    return value.name ?? value.username ?? value.email ?? JSON.stringify(value)
  }
  return String(value)
}

export default function ResourcePage({ title, description, resource, fields }) {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetchCollection(resource, controller.signal)
      .then(setRecords)
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') setError(requestError.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [resource, refreshKey])

  function refreshRecords() {
    setError('')
    setLoading(true)
    setRefreshKey((value) => value + 1)
  }

  return (
    <section className="resource-page">
      <div className="page-heading">
        <div>
          <p className="page-eyebrow">TRACKER / {resource.toUpperCase()}</p>
          <h1>{title}</h1>
          <p className="page-description">{description}</p>
        </div>
        <button className="btn btn-outline-dark refresh-button" onClick={refreshRecords} type="button">
          Refresh
        </button>
      </div>

      <section className="data-panel" aria-label={`${title} data`}>
        <div className="data-panel-heading">
          <div>
            <h2>All {title.toLowerCase()}</h2>
            <p>{loading ? 'Loading records' : `${records.length} records`}</p>
          </div>
          <span className="data-source">LIVE DATA</span>
        </div>

        {error && <div className="alert alert-danger m-3" role="alert">{error}</div>}
        {loading && <p className="table-message" role="status">Loading {title.toLowerCase()}...</p>}
        {!loading && !error && records.length === 0 && (
          <p className="table-message">No {title.toLowerCase()} to show yet.</p>
        )}
        {!loading && !error && records.length > 0 && (
          <div className="table-responsive">
            <table className="table resource-table mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  {fields.map((field) => <th key={field.label} scope="col">{field.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={record._id ?? record.id ?? `${resource}-${index}`}>
                    <th scope="row">{String(index + 1).padStart(2, '0')}</th>
                    {fields.map((field) => (
                      <td key={field.label}>{displayValue(readField(record, field.keys))}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </section>
  )
}