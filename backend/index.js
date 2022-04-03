const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const pinRoute=require("./routes/pins");
const userRoute=require("./routes/users");

const app=express();

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Mongodb Connected");
}).catch((err)=>{
    console.log(err);
});

app.use("/api/users",userRoute);
app.use("/api/pins",pinRoute);

app.listen(8080,()=>{
    console.log(`Server running https://localhost:8080`)
})