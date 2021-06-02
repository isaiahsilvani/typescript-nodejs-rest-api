import mongoose, { Schema } from 'mongoose'
import IUserScore from '../interfaces/userscore'


const UserScoreSchema: Schema = new Schema(
  {
      username: { type: String, required: true },
      score: { type: Number, required: true },
      difficulty: { type: String, required: true}
  },
  {
      timestamps: true
  }
);

// EXTRA FUNCTIONALITY OF TYPESCRIPT ALERT - post/pre function
// Choose one of the actions you want to bind the post operation to


export default mongoose.model<IUserScore>('UserScore', UserScoreSchema);