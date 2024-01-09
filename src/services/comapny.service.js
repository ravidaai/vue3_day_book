import axios from "axios";
import authHeader from "./auth-header";
import { companyApi } from "./api";

class CompanyService {
  
  index(payload) {
    // const params = new URLSearchParams({
    //   skip: payload.skip,
    //   limit: payload.limit,
    // }).toString();

    // const url = companyApi.index +'?' +params;

    // return axios.get(url, { headers: authHeader() });

    //OR

    return axios.get(
      companyApi.index,
      {
        params: {
          limit: payload.limit,
          page: payload.page,
        },
      },
      { headers: authHeader() }
    );
  }

  show(id) {
    return axios.get(companyApi.show + "/" + id, { headers: authHeader() });
  }

  create(company) {
    return axios.post(companyApi.create, company, { headers: authHeader() });
  }

  update(payload) {
    //console.log("Payload",payload)
    return axios.patch(companyApi.update + "/" + payload.id, payload.company, {
      headers: authHeader(),
    });
  }

  delete(id) {
    return axios.delete(companyApi.delete + "/" + id, {
      headers: authHeader(),
    });
  }

  dropdown() {
    return axios.get(companyApi.dropdown, { headers: authHeader() });
  }

}

export default new CompanyService();
