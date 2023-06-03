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
let questSchema = mongoose.Schema({
    title:String,
    description:String,
    contact:String,
    point:Number
})

//create model 
let quest_product=mongoose.model("Quests",questSchema)//mongoose.model(Collection name in MongoDB,Schema)\


//export model
module.exports = quest_product

//design function for save data
module.exports.saveQuest=function(model,data){
    model.save(data)
}
