const { Schema, model } = require("mongoose")

const eventCommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 280
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: 'New'
    },

  },
  {
    timestamps: true,
  }
)

const EventComment = model("EventComment", eventCommentSchema)

module.exports = EventComment
