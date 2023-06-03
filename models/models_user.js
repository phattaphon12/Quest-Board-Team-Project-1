// use mongoose
const mongoose=require('mongoose')


//connect to mongoDB
mongoose.set("strictQuery",false)
const dbUrl='mongodb://127.0.0.1:27017/Quest_project'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

//design schema
let user = mongoose.Schema({
    name:String,
    password:String,
    contact:String
})

//create model 
let User=mongoose.model("data_User",user)//mongoose.model(Collection name in MongoDB,Schema)\


//export model
module.exports = User

//design function for save data
module.exports.saveQuest=function(model,data){
    model.save(data)
}
