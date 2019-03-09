const express = require("express");

const app = express();

const nameRouters = require("./routes/name");
const lastingRouters = require("./routes/lasting");

app.use(nameRouters);
app.use(lastingRouters);

app.listen(3000);
