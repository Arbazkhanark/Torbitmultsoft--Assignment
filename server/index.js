const express=require("express");
const dbConnection = require("./database");
const cors=require("cors")

const app=express();
dbConnection();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:"*"
}));
app.use(require("./routes/userRoute"))




app.listen(4000,()=>console.log(`Server is running on 4000`));