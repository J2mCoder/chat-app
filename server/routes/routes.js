const { Router } = require("express")
const router = Router()
const controllers = require("../controller/controllers")

router.get("/", controllers.GET_HOME)
router.post("/login", controllers.POST_LOGIN)
router.post("/signin", controllers.POST_SIGNIN)

module.exports = router
