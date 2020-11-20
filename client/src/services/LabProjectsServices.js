//class of LabProjectsServices

import Api from '../services/Api';

export default {
    //lab page
    getAllLabProjects(){
        return Api().get('lab') //end point name
    },
    //lab detail page 
    getLabProjectById(labProjectId){
        return Api().get(`lab/${labProjectId}`) //end point name
    },
    //add lab
    postLabProject(lab){
        //data pass in end point - json
        return Api().post('lab', lab) //route name
    },
    //edit lab project
    putLabProject(labProjectId,lab){
        //data pass in end point - json
        return Api().put(`lab/${labProjectId}`, lab) //route name
    },
}
