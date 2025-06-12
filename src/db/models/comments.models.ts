import mongoose, { Schema } from "mongoose";

const commentSchema: Schema = new Schema(
  {
    email: { type: String, require: true },
    comments: { type: String, require: true },
    client_name: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
  }
);

const CommentsModel = mongoose.models.Comments || mongoose.model("Comments", commentSchema);

export default CommentsModel;
