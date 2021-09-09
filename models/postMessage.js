import mongoose from "mongoose";

//mongoose schema defines the structure and rule of the data
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Turn schema to model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
