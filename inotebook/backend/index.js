const connectToMongo=require('./db');
connectToMongo();
const express =require("express");
const app= express();
const port=5001;
app.get("/",(req,res)=>{
    res.send("Connected To Express");
});

app.use(express.json());
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log(`Application listening at http://localhost:${port}`);
});