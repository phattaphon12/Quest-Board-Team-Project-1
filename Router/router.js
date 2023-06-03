//manage routing
const express=require('express')
const router=express.Router()
const Quest=require('../models/quest_product')//use model
const User=require('../models/models_user')
const mongoose=require('mongoose')

router.get('/',(req,res)=>{
    res.render('role.ejs')
})

router.get('/add',(req,res)=>{
    res.render('add_quest.ejs')
})

/* ---------------------------------------------------------------- */
/* router.get('/details',(req,res)=>{
    res.render('details.ejs')
}) */
/* ---------------------------------------------------------------- */

router.post('/input',(req,res)=>{//post method use body to show the data
    /*console.log(req.body.name)
    console.log(req.body.price)
    console.log(req.body.image)
    console.log(req.body.description)*/
    
    let data=new Quest({
        title:req.body.title,
        description:req.body.description,
        contact:req.body.contact,
        category:req.body.category,
        point:req.body.point
    })
    console.log(data)
    Quest.saveQuest(data)
    /* res.render('add_quest.ejs') */
    res.redirect('/manageQuest')
})

/* ---------------------------------------------------------------- */
router.get('/board_qstd',(req,res)=>{
    Quest.find().then(doc=>res.render('board_quest_std.ejs',{quests:doc})).catch(err=>console.log(err))
})

router.post('/details',(req,res)=>{
    const details_id=req.body.details_id
    Quest.findOne({_id:details_id}).then(doc=>res.render('details.ejs',{quests:doc}))
})
/* ---------------------------------------------------------------- */

router.get('/manageQuest',(req,res)=>{
    Quest.find().then(doc=>res.render('board_quest.ejs',{quests:doc})).catch(err=>console.log(err))
})

router.get('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    Quest.findByIdAndDelete(req.params.id,{useFindAndModify:false}).catch(err=>console.log(err))
    res.redirect('/manageQuest')
})

router.post('/edit',(req,res)=>{
    const edit_id=req.body.edit_id
    Quest.findOne({_id:edit_id}).then(doc=>res.render('edit_quest.ejs',{quests:doc}))
})

router.post('/update',(req,res)=>{
    const update_id=req.body.update_id
    let data={
        title:req.body.title,
        description:req.body.description,
        contact:req.body.contact,
        category:req.body.category,
        point:req.body.point
    }
    console.log(update_id)
    console.log(data)
    Quest.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).catch(err=>console.log(err))
    res.redirect('/manageQuest')
})

module.exports=router