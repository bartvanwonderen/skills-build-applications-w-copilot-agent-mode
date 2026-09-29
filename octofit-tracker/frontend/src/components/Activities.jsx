import ResourcePage from './ResourcePage.jsx'

export default function Activities() {
  return (
    <ResourcePage
      title="Activities"
      description="Recent movement logged across your OctoFit community."
      resource="activities"
      fields={[
        { label: 'Activity', keys: ['activityType', 'activity_type', 'type', 'name'] },
        { label: 'Member', keys: ['user.username', 'user.name', 'username', 'user'] },
        { label: 'Duration', keys: ['duration', 'durationMinutes', 'duration_minutes'] },
        { label: 'Date', keys: ['date', 'createdAt', 'created_at'] },
      ]}
    />
  )
}