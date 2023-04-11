const express=require("express")
const {connection, UserModal, }=require("./db")
const app= express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.get("/",async(req,res)=>{
    console.log("home");
    let users=await UserModal.find()
    res.send(users)
})
app.post("/",async(req,res)=>{
    //console.log(req.body)
    try {
        
        let user=new  UserModal(req.body)
        await user.save()
        res.send("Data Sent Successfully")
    } catch (error) {
        res.send({
            "msg": error.message
        });
    }

})


app.listen(8080,async()=>{
    try {
        await connection
        console.log("connection done in DB");
    } catch (error) {
        console.log("Connection Failure");
    }
    console.log("server running on 8080");
})