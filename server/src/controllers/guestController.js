
const {guest} = require('../models')
const {Op} =require('../models')

module.exports ={ 
    async getGuest(req,res){
        try{res.status(200)
            res.send('get Guest')
        }catch(err){
            res.status(500)
            res.send("There was a error on the server", err)}
            },
        async postGuest(req,res){
        try{res.status(200)
            res.send('post Guest')}
        catch(err){
            res.status(500)
            res.send("There was a error on the server", err)}
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