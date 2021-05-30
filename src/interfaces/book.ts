// Create an interface that describes a document in MongoDB and then attach is to a model!
import { Document } from 'mongoose'

export default interface IBook extends Document {
  title: string,
  author: string;
  extraInformation: string
}