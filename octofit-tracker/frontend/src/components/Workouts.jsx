import ResourcePage from './ResourcePage.jsx'

export default function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      description="Training ideas for building a stronger routine."
      resource="workouts"
      fields={[
        { label: 'Workout', keys: ['name', 'title'] },
        { label: 'Type', keys: ['type', 'category'] },
        { label: 'Duration', keys: ['duration', 'durationMinutes', 'duration_minutes'] },
        { label: 'Difficulty', keys: ['difficulty', 'level'] },
      ]}
    />
  )
}