// use mongoose
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const schema=mongoose.Schema


//connect to mongoDB
mongoose.set("strictQuery",false)
const dbUrl='mongodb://127.0.0.1:27017/Quest_project'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

//design schema
const userSchema = new schema({
    Role:{
        type: String,
        require:[true,'Please choose your role']
    },
    First_name:{
        type: String,
        required:[true,'Please provide first name']
    },
    Last_name:{
        type: String,
        required:[true,'Please provide last name']
    },
    Nick_name:{
        type: String,
        required:[true,'Please provide nick name']
    },
    Address:{
        type: String,
        required:[true,'Please provide address']
    },
    Phone_number:{
        type: Number,
        required:[true,'Please provide phone number']
    },
    ID_Line:{
        type: String,
        required:[true,'Please provide ID line']
    },
    Other_Contact:{
        type: String,
        required:[true,'Please provide other contact']
    },
    Email:{
        type: String,
        required:[true,'Please provide email']
    },
    Username:{
        type: String,
        required:[true,'Please provide username']
    },
    Password:{
        type: String,
        required:[true,'Please provide password']
    }
})

userSchema.pre('save',function(next){
    const user=this

    bcrypt.hash(user.Password,10).then(hash=>{
        user.Password=hash
        next()
    }).catch(error=>{
        console.error(error)
    })
})

//create model 
let User=mongoose.model("data_User",userSchema)//mongoose.model(Collection name in MongoDB,Schema)\


//export model
module.exports = User

//design function for save data
module.exports.saveUser=function(model,data){
    model.save(data)
}
