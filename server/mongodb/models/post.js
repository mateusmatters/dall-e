//Mongoose is an Object Data Modeling library
//For MongoDB and Node.js
import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
