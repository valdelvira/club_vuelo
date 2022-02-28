const router = require("express").Router()
const User = require('./../models/User.model')

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

router.post("/profile/:user_id/delete", (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})




module.exports = router