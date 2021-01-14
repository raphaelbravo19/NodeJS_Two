const express = require("express")
var cors = require('cors');
const app = express();

//setting
app.set("port", process.env.PORT || 80)
app.set("json spaces", 2)

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//routes
app.use(require("./routes/status"))
app.use("/auth", require("./routes/users"))

//start server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`)
})