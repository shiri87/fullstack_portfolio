
//class of GuestbookServices

import Api from '../services/Api';

export default {
    getAllGuestbooks(){
        return Api().get('guest')

        // return Api().get('guest',guest)
    },
    // getAllGuestbooks(guest){
    //     //data pass in end point - json
    //     return Api().post('guest',guest) //route name
    // },
}
