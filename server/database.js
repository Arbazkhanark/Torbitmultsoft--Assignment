const mongoose=require("mongoose");

const dbConnection=async(req,res)=>{
    try {
        const db=await mongoose.connect("mongodb://localhost:27017");
        console.log("Database Connected :)");
    } catch (error) {
        console.log("Failed to DB connection",error)
    }
}

module.exports=dbConnection;