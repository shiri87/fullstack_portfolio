const {Op} =require('../models')
const {Guest} = require('../models')


module.exports = { 
    async getAllGuestbooks(req,res){
        try{
            const guest =await Guest.findAll({
                limit:200
            })     
             res.send(guest)
        }catch(err){
            res.status(500)
            res.send("An error | trying to get all guestbook", err)}
            },
        async postGuestbook(req,res){
            try{
                const guest = await Guest.create(req.body)
                res.send(guest)
            }
            catch(err){
                res.status(500)
                res.send("An error | trying to post a guest book", err)}
            },
        async putGuest(req,res){
        try{res.status(200)
            res.send('put Guest')
        }catch(err){
            res.status(500)
            res.send("There was a error on the server", err)}
        },
        async deleteGuest(req,res){
        try{res.status(200)
            res.send('delete Guest')
        }catch(err){
            res.status(500)
            res.send("There was a error on the server", err)}
        },
    }