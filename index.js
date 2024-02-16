const express = require('express');
const cors = require('cors');

const connect = require("./database/connection");
const routes = require("./routes/routes")

const port = process.env.PORT | 8000;
const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());

app.use('/', routes)


connect()
    .then(() => {
        try {
            app.listen(port, () => {
                console.log("server running on port:", port);
            })
        } catch (error) {
            console.log(error)
        }
    }).catch((error) => {
        console.log('database connection error', error)
    })