// Create an interface that describes a document in MongoDB and then attach is to a model!
import { Document } from 'mongoose'

export default interface IUserScore extends Document {
  username: string,
  amount: number;
  difficulty: string
}