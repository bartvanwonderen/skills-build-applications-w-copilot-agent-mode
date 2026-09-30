import ResourcePage from './ResourcePage.jsx'

// API endpoint: https://{codespace}-8000.app.github.dev/api/users

export default function Users() {
  return (
    <ResourcePage
      title="Users"
      description="Members registered in the OctoFit community."
      resource="users"
      fields={[
        { label: 'Member', keys: ['username', 'name', 'fullName', 'full_name'] },
        { label: 'Email', keys: ['email'] },
        { label: 'Team', keys: ['team.name', 'teamName', 'team_name', 'team'] },
        { label: 'Joined', keys: ['createdAt', 'created_at', 'joinedAt'] },
      ]}
    />
  )
}
