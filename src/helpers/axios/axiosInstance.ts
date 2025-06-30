
import { authKey } from "@/constants/storageKey";
import { getNewAccessToken, removeUserInfo } from "@/service/authService";
import { getFormLocalStorage, setToLocalStorage } from "@/util/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = getFormLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization =`Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error?.config;
    if ((error?.response?.status === 419 || error?.response?.status === 401) && !config?.sent) {
      handleLogout()
      // config.sent = true;
      // try {
      //   const response = await getNewAccessToken();
      //   const accessToken = response?.data?.data?.token;
      //   if (accessToken) {
      //     config.headers['Authorization'] = accessToken;
      //     setToLocalStorage(authKey, accessToken);
      //     return instance(config);
      //   } else {
      //     handleLogout();
      //   }
      // } catch (tokenError) {
      //   handleLogout();
      // }
    } else {

      return Promise.reject(error);
    }
  }
);

export function handleLogout() {
  removeUserInfo(authKey);
  window.location.href = "/login";
}

export { instance };
