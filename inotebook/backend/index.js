const express =require("express");
var cors=require('cors');
const connectToMongo=require('./db');
connectToMongo();
const app= express();
const port=5001;
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Connected To Express");
});

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/note'))

app.listen(port,()=>{
    console.log(`Application listening at http://localhost:${port}`);
});