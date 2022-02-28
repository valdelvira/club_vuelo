const router = require("express").Router()

router.use("/user", require('./user.routes'))
router.use("/events", require('./events.routes'))
router.use("/news", require('./news.routes'))
<<<<<<< HEAD
// router.use("/auth", './auth.routes')
=======
router.use("/auth", require('./auth.routes'))
>>>>>>> b4252312f4c668c761a9116ee1cc5c427634f22f


module.exports = router
