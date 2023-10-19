import axios from "axios";

const url: string = "https://plp-be.onrender.com/api";

export const create = async (data: any) => {
  try {
    return axios.post(`${url}/register`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (data: any) => {
  try {
    return axios.post(`${url}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const verify = async (token: any) => {
  try {
    return axios.get(`${url}/${token}/verify`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
