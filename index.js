const express = require("express");
const route = require("./routes/index-route");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const database = require("./config/database");
const cookieParser = require('cookie-parser');



const port = 3000;
const app = express();

app.use(methodOverride("_method"));

database.connect();


app.use(express.static(`${__dirname}/public`));

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());

// Pug
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

route(app);

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});