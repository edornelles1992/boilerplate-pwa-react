import axios from "axios";
import { strings } from "../assets/config"
import * as crypto from 'crypto-js'

/**
 * BASE URLS of the service used on UserService.
 */
const BASE_USER = "user/";

/**
 * URLS of the service used on UserService.
 */
const RESOURCES = {
  LOGIN: BASE_USER + "login/",
  LOGOUT: BASE_USER + "logout/",
  LIST_USERS: BASE_USER + "list/"
};

/**
 * Params used on services methods.
 */
const PARAMS = {
  EMAIL: 'email',
  PASSWORD: 'password'
};

class UserService {

  static login(email, password) {
    return axios
      .post(RESOURCES.LOGIN, JSON.stringify({
        [PARAMS.EMAIL]: email,
        [PARAMS.PASSWORD]: crypto.SHA256(password).toString(),
      }))
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log(error);
        return strings.errors.genericError;
      });
  }

  static listUsers() {
    return axios
      .get(RESOURCES.LIST_USERS)
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log(error);
        return strings.errors.genericError;
      });
  }
}

export default UserService;
