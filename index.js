const express = require('express');
const cors = require('cors');
const app = express ();


app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{
    res.json({
        name: "Rupinder Singh"
    })
});



app.listen(8080, ()=> console.log("Service is running at port 8080"));

