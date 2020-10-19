
// const {lab} = require('../models')
// const {Op} =require('../models')


module.exports ={ 
    async getLab(req,res){
    try{res.status(200)
        res.send('get lab')
    }catch(err){
        res.status(500)
        res.send("There was a error on the server", err)}
        },
    async postLab(req,res){
    try{res.status(200)
        res.send('post lab')}
    catch(err){
        res.status(500)
        res.send("There was a error on the server", err)}
    },
    async putLab(req,res){
    try{res.status(200)
        res.send('put lab')
    }catch(err){
        res.status(500)
        res.send("There was a error on the server", err)}
    },
    async deleteLab(req,res){
    try{res.status(200)
        res.send('delete lab')
    }catch(err){
        res.status(500)
        res.send("There was a error on the server", err)}
    },
}