//AuthenticationService
import Api from '@/services/Api';

export default {
    resister(credentials){
        return Api().post('register', credentials)
    }
}

