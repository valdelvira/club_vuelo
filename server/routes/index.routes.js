const router = require("express").Router()

router.use("/user", require('./user.routes'))
router.use("/events", require('./events.routes'))
router.use("/news", require('./news.routes'))
// router.use("/auth", './auth.routes')


module.exports = router
