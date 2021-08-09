/* eslint-disable */
import TokenService from "./token.service";
import authService from "./auth.service";
import { authApi } from "./api";
import axios from "axios";
import EventBus from "../common/EventBus";

const setup = (store) => {
  axios.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token; // for Spring Boot back-end
        //config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== authApi.login && err.response) {
        
        //logout if refresh token is even expired
        if(err.response.status===403){
          EventBus.dispatch("logout");
        }

        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            await authService
              .refreshToken({
                refreshToken: TokenService.getLocalRefreshToken(),
              })
              .then((response) => {
                store.dispatch("auth/refreshToken", response.data.data);
                TokenService.updateLocalAccessToken(response.data.data);
              })
              .catch((error) => {
                if(error.response.status===403){
                  EventBus.dispatch("logout");
                }
                //console.log(error.response.status);
                console.log('Logout success');
              });

            // store.dispatch("auth/refreshToken", rs.data.data);
            // TokenService.updateLocalAccessToken(rs.data.data);

            return axios(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;
