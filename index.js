const express = require('express');
const cors = require('cors');
const app = express ();
require('./db/connection');
const routes = require('./src/startup/index');

app.use(cors());
app.use(express.json());



app.use(routes)



app.listen(8080, ()=> console.log("Service is running at port 8080"));

