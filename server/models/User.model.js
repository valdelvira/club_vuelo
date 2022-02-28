const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 15
    },
    name: {
      type: String,
      minlength: 2,
      maxlength: 25
    },
    surname: {
      type: String,
      minlength: 2,
      maxlength: 35
    },
    dni: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, 'El DNI no es válido'],
      validate: function (email) {
        return /^([a-z]{3}[0-9]{6}[a-z])$/.test(email)
      }
    },
    flightHours: {
      type: Number
    },
    aboutMe: {
      type: String
    },
    password: {
      type: String,
      required: true,
    },
    event: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER'
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Introduzca su e-mail'],
      validate: function (email) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
      }
    },
    imageURL: {
      type: String,
      default: 'https://img.favpng.com/17/1/20/user-interface-design-computer-icons-default-png-favpng-A0tt8aVzdqP30RjwFGhjNABpm.jpg'
    },
    birth: {
      type: Date
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema)

module.exports = User
