import axios from 'axios';
import authHeader from './auth-header';
import {daybookApi} from "./api"

class DaybookService {


  index() {
    return axios.get(daybookApi.index, { headers: authHeader() });
  }

  show(id) {
    return axios.get(daybookApi.show+'/'+id, { headers: authHeader() });
  }

  create(invoice) {
    return axios.post(daybookApi.create, invoice, { headers: authHeader() });
  }

  update(payload) {
    //console.log("Payload",payload)
    return axios.patch(daybookApi.update+'/'+payload.id, payload.invoice, { headers: authHeader() });
  }

  delete(id) {
    return axios.delete(daybookApi.delete+'/'+id, { headers: authHeader() });
  }
}

export default new DaybookService();