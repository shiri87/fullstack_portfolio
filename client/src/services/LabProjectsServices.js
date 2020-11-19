//class of LabProjectsServices

import Api from '../services/Api';

export default {
    getAllLabProjects(){
        return Api().get('lab') //end point name
    },
    postLabProject(lab){
        //data pass in end point - json
        return Api().post('lab', lab) //route name
    },
}
