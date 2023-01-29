import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: {
      type: String,
      validate: {
        validator: function (value) {
          var pattern = new RegExp("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$")
          return pattern.test(value);
        },
        message: "Invalid image extenstion"
      }
    },
    // comments: {
    //   type: String,
    //   default: []
    // }
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;