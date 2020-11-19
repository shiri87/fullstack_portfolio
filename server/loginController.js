const { login } = require("./src/controllers/registerController")

module.exports ={

    async login(req,res){
        try{
            const{email,password}=req.body
            const user = await user.findOne({
                where:{email:email}
            })
            if(!user){
                return res.status(401).send({error:"the login information was incorrect."})
            }
            const isPasswordValid = password = user.password
            if(!isPasswordValid){
                res.status(401).send({error:'The login information was incorrect.'})
            }
            const userJSON = user.toJSON()
            res.send({user:userJSON})
        }catch(err){
            res.status(400).send({
                error:'This email account is already in use'
            })
        }
    }
}