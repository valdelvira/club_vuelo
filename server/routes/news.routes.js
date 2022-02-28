const router = require("express").Router()
const New = require('../models/New.model')
const Comment = require('../models/Comment.model')

router.get("/", (req, res) => {

    New
        .find()
        .populate('comments')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:new_id", (req, res) => {
    const { new_id } = req.params
    New
        .findById(new_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:new_id/edit", (req, res) => {
    const { new_id } = req.params

    New
        .findById(new_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/create", (req, res) => {

    const { title, description, imgURL } = req.body

    New
        .create({ title, description, imgURL })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/:new_id/edit", (req, res) => {

    const { new_id } = req.params
    const { title, description, imgURL, comment } = req.body

    New
        .findByIdAndUpdate(new_id, { title, description, imgURL, comment })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/:new_id/delete", (req, res) => {

    const { new_id } = req.params

    New
        .findByIdAndDelete(new_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

<<<<<<< HEAD
router.post("/:new_id/comment", (req, res) => {
=======
router.post("/comment/:new_id", (req, res) => {
>>>>>>> refs/remotes/origin/main

    const { new_id } = req.params
    const { comment, owner } = req.body

    Comment
<<<<<<< HEAD
        .create({ comment, user_id, new_id })
=======
        .create({ comment, owner, new_id })
        .then(response => {
            New.findByIdAndUpdate(new_id, { $push: { comments: response._id } })
        })
>>>>>>> refs/remotes/origin/main
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/:comment_id/comment/delete", (req, res) => {

    const { comment_id } = req.params

    Comment
        .findByIdAndDelete(comment_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})





module.exports = router