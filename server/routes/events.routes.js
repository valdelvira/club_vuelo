const router = require("express").Router()
const Event = require('../models/Event.model')
const EventComment = require('../models/EventComment.model')

router.get("/events/", (req, res) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/events/:event_id", (req, res) => {
    const { event_id } = req.params
    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/events/:event_id/edit", (req, res) => {
    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/events/:event_id/edit", (req, res) => {

    const { event_id } = req.params
    const { title, text, imgURL, location } = req.body

    Event
        .findByIdAndUpdate(event_id, { title, text, imgURL, location })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/events/create", (req, res) => {

    const { title, text, imgURL, location } = req.body

    Event
        .create({ title, text, imgURL, location })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/events/:event_id/delete", (req, res) => {

    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/events/:event_id/join", (req, res) => {

    const { event_id } = req.params
    const { user_id } = req.body

    Event
        .findByIdAndUpdate(event_id, { $push: { participants: user_id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/events/:event_id/comment", (req, res) => {

    const { event_id } = req.params
    const { comment, user_id } = req.body

    EventComment
        .create({ event_id, comment, user_id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/events/:event_id/comment/delete", (req, res) => {

    const { event_id } = req.params

    EventComment
        .findByIdAndDelete(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router