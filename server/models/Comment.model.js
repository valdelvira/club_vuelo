const { Schema, model } = require("mongoose")

const newsCommentSchema = new Schema(
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
    },
    new: {
      type: Schema.Types.ObjectId,
      ref: 'New'
    },

  },
  {
    timestamps: true,
  }
)

const NewsComment = model("NewsComment", newsCommentSchema)

module.exports = NewsComment.model
