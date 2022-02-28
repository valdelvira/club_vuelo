const { Schema, model } = require("mongoose")

const newSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    text: {
      type: String,
      required: true,
      minlength: 2
    },
    imgURL: {
      type: String
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
  }
)

const New = model("New", newSchema)

module.exports = New
