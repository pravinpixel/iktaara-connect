import axios from "axios";
import { BASE_URL } from "./constant-helper";
import zustandStore from "./zustand";
import { getSession } from "next-auth/react";
// import { signIn } from "next-auth/react";

const SECONDS = 30;
const MILISECONDS = 1000;
const TIMEOUT = SECONDS * MILISECONDS;
let isRefershing = false;


const API = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
})


const refreshToken = async () => {
    const session = await getSession();
    console.log("session", session);
  
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

API.interceptors.request.use(async function (config) {
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


  API.interceptors.response.use(
    async (response) => {
      return response;
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
  


export default API