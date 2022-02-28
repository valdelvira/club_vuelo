const { Schema, model } = require("mongoose")

const eventSchema = new Schema(
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
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'EventComment'
    }],
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    },
    participants: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    timestamps: true,
  }
)

const Event = model("Event", eventSchema)

module.exports = Event
