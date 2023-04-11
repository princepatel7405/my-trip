const express=require("express")
const {connection, UserModal, }=require("./db")
const app= express()
app.use(express.json())
app.get("/",(req,res)=>{
    console.log("home");
    res.send("Welcome to home ")
})
app.post("/",async(req,res)=>{
    //console.log(req.body)
    let user=new  UserModal(req.body)
    await user.save()
    res.send("Data Sent Successfully")

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