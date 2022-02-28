const router = require("express").Router()
const User = require('./../models/User.model')

router.get("/profile", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/profile/:user_id", (req, res) => {
    const { user_id } = req.params
    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/profile/:user_id/edit", (req, res) => {
    const { user_id } = req.params
    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/profile/:user_id/edit", (req, res) => {

    const { user_id } = req.params
    const { name, surname, flightHours, aboutMe, email, imageUrl, password } = req.body

    User
        .findByIdAndUpdate(user_id, { name, surname, flightHours, aboutMe, email, imageUrl, password })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/profile/:_id/delete", (req, res) => {

    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/profile", (req, res) => {

    const { username, name, lastname, nif, flightHours, aboutMe, password, imageURL, birth, email } = req.body

    User
        .create({ username, name, lastname, nif, flightHours, aboutMe, password, imageURL, birth, email })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})




module.exports = router