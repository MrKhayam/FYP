const express = require('express');
const connectDB = require('./Config/connection');
const errorHandler = require('./Middlewares/errorMiddleware');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/api/user/", require('./Routes/userRoutes'));
app.use(errorHandler);

app.listen(port, console.log(`Server Started at port: ${port}`));