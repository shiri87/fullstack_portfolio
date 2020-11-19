//AuthenticationService
import Api from '../services/Api';

export default {
    register(credentials){
        console.log(credentials);
        return Api().post('register', credentials)
    },
    login(credentials){ //router
        return Api().post('login', credentials)
        //endpoint //router name
    }
}

