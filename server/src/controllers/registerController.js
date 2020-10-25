
const {register} = require('../models')
const {Op} =require('../models')


module.exports={
   async register(req,res){
        try{res.status(200)
            res.send({
            // message :`Hello ${req.body.email} you have registered in \('o')/`
            message :`Hello you have registered in \('o')/`
        })}
        catch(err){
            res.status(400).send({
                error : err
            })
        }
    }
}