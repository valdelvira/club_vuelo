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

<<<<<<< HEAD
router.get("/create", (req, res) => {
    const { event_id } = req.params

    New
        .create(new_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:new_id/edit", (req, res) => {
    const { event_id } = req.params
=======
router.get("/:new_id/edit", (req, res) => {
    const { new_id } = req.params
>>>>>>> b4252312f4c668c761a9116ee1cc5c427634f22f

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
<<<<<<< HEAD
>>>>>>> b4252312f4c668c761a9116ee1cc5c427634f22f
=======
>>>>>>> refs/remotes/origin/main
>>>>>>> 41859f1ec6760b29dd06eb449c04c806651b7dc0

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