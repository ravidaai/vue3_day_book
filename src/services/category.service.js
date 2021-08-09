import axios from 'axios';
import authHeader from './auth-header';
import {categoryApi} from "./api"

class CategoryService {


  index() {
    return axios.get(categoryApi.index, { headers: authHeader() });
  }

  show(id) {
    return axios.get(categoryApi.show+'/'+id, { headers: authHeader() });
  }

  create(category) {
    return axios.post(categoryApi.create, category, { headers: authHeader() });
  }

  update(payload) {
    //console.log("Payload",payload)
    return axios.patch(categoryApi.update+'/'+payload.id, payload.category, { headers: authHeader() });
  }

  delete(id) {
    return axios.delete(categoryApi.delete+'/'+id, { headers: authHeader() });
  }
}

export default new CategoryService();