import ResourcePage from './ResourcePage.jsx'

export default function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      description="See how members and teams are progressing."
      resource="leaderboard"
      fields={[
        { label: 'Rank', keys: ['rank', 'position'] },
        { label: 'Member / team', keys: ['user.username', 'user.name', 'team.name', 'name', 'user', 'team'] },
        { label: 'Points', keys: ['points', 'score', 'totalPoints'] },
        { label: 'Updated', keys: ['updatedAt', 'updated_at', 'date'] },
      ]}
    />
  )
}