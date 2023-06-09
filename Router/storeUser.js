const express=require('express')
const router2=express.Router()
const User=require('../models/models_user')


router2.post('/newuser',(req,res)=>{//post method use body to show the data
    if(req.body.password == req.body.confirmpassword){
        let data=new User({
            First_name:req.body.First_name,
            Last_name:req.body.Last_name,
            nick_name:req.body.nick_name,
            Address:req.body.Address,
            Phone_number:req.body.Phone_number,
            ID_Line:req.body.ID_Line,
            Other_Contact:req.body.Other_Contact,
            Email:req.body.Email,
            Username:req.body.Username,
            Password:req.body.Password
            
        })
        console.log(data)
        User.saveUser(data)
        res.redirect('/')
    }
    
    
    
})

module.exports=router2
/*
module.exports=(req,res)=>{
    User.create(req.body).then(()=>{
        console.log("User registered successfully")
        res.redirect('/')
    }).catch((error)=>{
        console.log(error)

        if(error){
            const validationErrors=Object.keys(error.errors).map(key =>error.errors[key].message)
            req.flash('validationErrors',validationErrors)
            return res.redirect('/register')
        }
    })
}*/