const { Router } = require("express")
const router = Router()

router.get("", (req, res) => {
    res.send("Status LIVE Version 1.0")
})

module.exports = router