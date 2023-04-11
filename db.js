const mongoose=require("mongoose")

const connection=mongoose.connect(`mongodb+srv://princepatel:princepatel@cluster0.pwgjq.mongodb.net/?retryWrites=true&w=majority/trip`)


const userSchema=mongoose.Schema({
    name:{type:"string"},
    email:{type:"string"},
    destination:{type:"string"},
    no_of_travellers:{type:"number"},
    budget_per_person:{type:"number"},

},{
    versionKey:false
})
const UserModal=mongoose.model("user",userSchema)

module.exports={
    connection,
    UserModal,
}
