var mysql = require("mysql")

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pikachu190813",
    database: "RaphaelDB",
    insecureAuth: true
});

const dbo = {
    connect: () => {
        db.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
    },
    select: (table = "Users", callback) => {
        db.query(`SELECT * FROM ${table}`, function (err, result, fields) {
            if (err) throw err
            callback(result)
        });
    },
    run: (sql = "", callback) => {
        db.query(sql, function (err, result, fields) {
            if (err) throw err
            callback(result)
        });
    },
}

dbo.connect()

module.exports = dbo
