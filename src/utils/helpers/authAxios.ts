import axios from "axios";
import CONSTANT from "./constant-helper";
import zustandStore from "./zustand";
import { getSession } from "next-auth/react";
// import { signIn } from "next-auth/react";


let isRefershing = false;


const AUTHAPI = axios.create({
  baseURL: CONSTANT.IKTARAA_BASE_URL || '',
  timeout: CONSTANT.TIMEOUT,
})


const refreshToken = async () => {
  // const session = await getSession();

  // if (session?.auth?.refresh_token) {
  //   try {
  //     // await signOut();
  //     await signIn("refresh", {
  //       token: session?.auth?.refresh_token,
  //       redirect: true,
  //       callbackUrl: "/",
  //     });
  //   } catch (err) {
  //     console.error("Error refreshing token:", err);
  //   }
  // }
};

AUTHAPI.interceptors.request.use(async function (config) {
  const session = await getSession()
  const token = zustandStore.getState().token;
  // Client Side
  if (session?.user?.authorization?.access_token) {
    config.headers["Authorization"] = `Bearer ${session?.user?.authorization?.access_token}`;
  } else if (token) {
    //Server Side
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});


AUTHAPI.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  async (error) => {

    if (error.response?.status === 401) {

      if (!isRefershing) {
        isRefershing = true;
        refreshToken();
      }


    }
    if (error.response?.status === 403) {
      // Validation Errors
      return Promise.reject(error?.response.data);
    }

    return Promise.reject(error?.response?.data);
  }
);



export default AUTHAPI