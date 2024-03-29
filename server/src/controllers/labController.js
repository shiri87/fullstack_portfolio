
const {Op} =require('../models')
const {LabProject} =  require('../models')


module.exports ={ 
    async getAllLabProjects(req,res){
    try{const labProjects = await LabProject.findAll({
        limit:100
    })
    res.send(labProjects)
    }catch(err){
        res.status(500)
        res.send("An error | trying to get all Lab projects", err)}
        },
    async getLabProjectById(req,res){
    try{
        const labProject = await LabProject.findOne({
        where:{id:req.params.labProjectId}
    })
    res.send(labProject)
    }catch(err){
        res.status(500)
        res.send("An error | trying to get a Lab project by id", err)}
        },
    async postLabProject(req,res){
    try{
        const labProject = await LabProject.create(req.body)
        res.send(labProject)}
    catch(err){
        res.status(500)
        res.send("An error | trying to post a new Lab Project", err)}
    },
    async putLabProject(req,res){
    try{
        const labProject =  await LabProject.update
        (req.body, {
            where: { id: req.params.labProjectId }
        })
        res.send(labProject)
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