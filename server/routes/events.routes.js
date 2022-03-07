const router = require("express").Router()
const Event = require('../models/Event.model')
const { isAuthenticated } = require('./../middlewares/jwt.middleware')

router.get("/", (req, res) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:event_id", isAuthenticated, (req, res) => {
    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:event_id/edit", isAuthenticated, (req, res) => {
    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/:event_id/edit", isAuthenticated, (req, res) => {

    const { event_id } = req.params
    const { title, description, imgURL, location } = req.body

    Event
        .findByIdAndUpdate(event_id, { title, description, imgURL, location })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/create", isAuthenticated, (req, res) => {

    const { title, description, imgURL, location } = req.body

    Event
        .create({ title, description, imgURL, location })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/:event_id/delete", isAuthenticated, (req, res) => {

    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/:event_id/join", (req, res) => {

    const { event_id } = req.params
    const { user_id } = req.body        // isAuthenticated

    Event
        .findByIdAndUpdate(event_id, { $push: { participants: user_id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router