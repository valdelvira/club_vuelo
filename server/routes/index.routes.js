const router = require("express").Router()

router.use("/user", require('./user.routes'))
router.use("/events", require('./events.routes'))
router.use("/news", require('./news.routes'))
<<<<<<< HEAD
// router.use("/auth", './auth.routes')
=======
router.use("/auth", require('./auth.routes'))
>>>>>>> refs/remotes/origin/main


module.exports = router
