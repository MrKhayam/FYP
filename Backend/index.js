const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use("/api/user/", require(''))

app.listen(port, console.log(`Server Started at port: ${port}`));