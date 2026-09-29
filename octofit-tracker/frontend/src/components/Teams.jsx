import ResourcePage from './ResourcePage.jsx'

export default function Teams() {
  return (
    <ResourcePage
      title="Teams"
      description="Groups bringing consistency and friendly competition."
      resource="teams"
      fields={[
        { label: 'Team', keys: ['name', 'teamName', 'team_name'] },
        { label: 'Members', keys: ['members', 'memberCount', 'member_count'] },
        { label: 'Points', keys: ['points', 'score', 'totalPoints'] },
        { label: 'Created', keys: ['createdAt', 'created_at'] },
      ]}
    />
  )
}