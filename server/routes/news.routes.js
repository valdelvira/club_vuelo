const router = require("express").Router()
const New = require('../models/New.model')
const NewsComment = require('../models/Comment.model')

router.get("/news/", (req, res) => {

    New
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/news/:new_id", (req, res) => {
    const { new_id } = req.params
    New
        .findById(new_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/news/create", (req, res) => {
    const { event_id } = req.params

    New
        .create(new_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/news/:new_id/edit", (req, res) => {
    const { event_id } = req.params

    New
        .findById(new_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/news/create", (req, res) => {

    const { title, text, imgURL } = req.body

    New
        .create({ title, text, imgURL })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/news/:new_id/edit", (req, res) => {

    const { new_id } = req.params
    const { comment } = req.body

    New
        .findByIdAndUpdate(new_id, { comment })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/news/:new_id/delete", (req, res) => {

    const { new_id } = req.params

    New
        .findByIdAndDelete(new_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/news/:new_id/comment", (req, res) => {

    const { new_id } = req.params
    const { comment, user_id } = req.body

    NewsComment
        .create({ comment, user_id, new_id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/news/:comment_id/comment/delete", (req, res) => {

    const { comment_id } = req.params

    NewsComment
        .findByIdAndDelete(comment_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})





module.exports = router