import * as mongoose from "mongoose";
import { Types } from "mongoose";
const schema = mongoose.Schema;

export default mongoose.model(
  "Recaptcha",
  new schema({
    _id: { type: Types.ObjectId },
    question: { type: String, default: "" },
    filePath: { type: String, default: "" },
    answer: [{ type: String, default: "" }],
  })
);
