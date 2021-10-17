import { Types } from "mongoose";

export interface IRecaptcha {
  _id: Types.ObjectId;
  question: string;
  filePath: string;
  answer: string[];
}
