var { Sequelize, INTEGER, TEXT, STRING, Model } = require("sequelize");

/* var mysql = require("mysql")

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

dbo.connect() */

var sequelize = new Sequelize(
  "mysql://root:Pikachu190813@localhost:3306/raphaelbd"
);

class User extends Model{}

var User = sequelize.define("User", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: STRING,
  description: TEXT,
});
User.sync();

/* User.create({ id: 1, name: "Raphael" })
  .then(() => {})
  .catch(() => {}); */
console.log(true);
module.exports = sequelize;
