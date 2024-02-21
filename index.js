const express = require('express');
const cors = require('cors');
const app = express ();
const {MongoClient,ServerApiVersion} = require("mongodb");
const uri = "mongodb+srv://expenses:expenses@cluster0.ju878l4.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose") ;
const {Schema,model} = mongoose;

mongoose.connect("mongodb+srv://expenses:expenses@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.use(cors());
app.use(express.json());

const expenseSchema = new Schema({
  title: String,
  value: Number
})
const expenseModel = model("Expenses",expenseSchema);
const expensesData = new expenseModel({
  title:"Bus fair",
  value: 20
});

app.post('/save-expenses',async (req,res)=>{
  await expensesData.save();
  res.send("Data saved Successfully")
})

app.get("/",(req,res)=>{
    res.json({
        name: "Rupinder Singh"
    })
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

app.listen(8080, ()=> console.log("Service is running at port 8080"));

