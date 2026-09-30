import { model, Schema } from 'mongoose';

const resourceSchema = new Schema<Record<string, unknown>>({}, { strict: false, timestamps: true });

export const User = model<Record<string, unknown>>('User', resourceSchema);
export const Team = model<Record<string, unknown>>('Team', resourceSchema);
export const Activity = model<Record<string, unknown>>('Activity', resourceSchema);
export const LeaderboardEntry = model<Record<string, unknown>>('LeaderboardEntry', resourceSchema);
export const Workout = model<Record<string, unknown>>('Workout', resourceSchema);