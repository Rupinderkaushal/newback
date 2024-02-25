const mongoose = require("mongoose");

const url = `mongodb+srv://expenses:expenses@cluster0.ju878l4.mongodb.net/`;

mongoose.connect(url,{useUnifiedTopology: true,
    useNewUrlParser: true})
 
const con = mongoose.connection;
con.once('open', ()=>{
  console.log("Successfully connected to MongoDB!")
})

con.on('error', (error) => {
  console.log('MongoDB connection error:', error);
});




