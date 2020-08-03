const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

//--- MIDDLEWARE ---//
app.use(cors());
app.use(express.json());

//--- ROUTES ---//

app.get("/users", async (req, res) => {
    try {
        const users = await db.query("SELECT first FROM users");
        console.log(users.rows);
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/", function (req, res) {
    res.redirect("/users");
});

app.listen(5000, () => {
    console.log("server all ears");
});
