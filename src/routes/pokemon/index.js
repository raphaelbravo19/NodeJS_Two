const { Router } = require("express")
const db = require("../../database")
const { validate } = require("../../utils/validators")

const router = Router()
router.post("", (req, res) => {
    var format = ["username", "password"]
    var body = req.body
    var errorMessage = validate(body, format)
    if (errorMessage != null) {
        res.json({
            status: "Error",
            errorCode: "400",
            errorMessage
        })
        return
    }
    try {
        db.run(`SELECT * FROM Users WHERE username='${body.username}' AND password='${body.password}'`, (result) => {
            if (result.length > 0) {
                var user = result[0]
                db.run(`UPDATE Users SET lastlogin=NOW() WHERE id=${user.id}`,
                    () => { console.log("Updated row with Id: " + user.id) })
                res.json({
                    status: "Success",
                    user
                })
            } else {
                res.json({
                    status: "Error",
                    errorCode: "400",
                    errorMessage: "User not found"
                })
            }

        })
    } catch (error) {
        res.json({
            status: "Error",
            errorCode: error.code,
            errorMessage: error.message
        })
    }
})

module.exports = router