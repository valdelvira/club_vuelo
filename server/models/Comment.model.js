const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 280
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
  }
)

const Comment = model("Comment", commentSchema)

<<<<<<< HEAD
module.exports = Comment.model
=======
module.exports = Comment
>>>>>>> refs/remotes/origin/main
