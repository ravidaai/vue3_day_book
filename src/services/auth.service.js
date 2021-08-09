import axios from "axios";
import {authApi} from "./api"
import TokenService from "./token.service";
class AuthService {
    login(user) {
    
      return   axios
      .post(authApi.login, user)
      .then(response => {
        // if (response.data.data.access_token) {
        //     //console.log(response.data.data.access_token)
        //   //localStorage.setItem('user', JSON.stringify(response.data.data));
        //   TokenService.setUser(response.data);
        // }

        if (response.data.data.access_token) {
          //console.log("Auth Service: ",response.data.data)
        //localStorage.setItem('user', JSON.stringify(response.data.data));
        TokenService.setUser(response.data.data);
      }
        
        return response.data;
      })
  }

  logout() {
      
    //localStorage.removeItem('user');
    TokenService.removeUser();
    
  }

  register(user) {
    return axios.post(authApi.register, user);
  }

  refreshToken(refreshToken){
    return axios.post(authApi.refreshToken, refreshToken);
    
  }


}
export default new AuthService();