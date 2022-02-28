const router = require("express").Router()

router.use("/user", require('./user.routes'))
router.use("/events", require('./events.routes'))
router.use("/news", require('./news.routes'))
<<<<<<< HEAD
// router.use("/auth", './auth.routes')
=======
router.use("/auth", require('./auth.routes'))
<<<<<<< HEAD
>>>>>>> b4252312f4c668c761a9116ee1cc5c427634f22f
=======
>>>>>>> refs/remotes/origin/main
>>>>>>> 41859f1ec6760b29dd06eb449c04c806651b7dc0


module.exports = router
