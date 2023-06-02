const express = require('express')
const path=require('path')
const app=express()
const router=require('./Router/router.js')


app.use('/public',express.static('public'))
app.use(express.urlencoded({extended:false}))//use with post method, define it before use router
app.use(router)

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
//app.use(express.static(path.join(__dirname,'public')))//static method is use to show only static file but they can't use with the data that derive from users or use data from server
app.listen(8080,()=>{
    console.log("start your server on 8080")
})