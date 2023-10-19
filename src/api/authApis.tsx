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
export const weatherAPI = async (city: any) => {
  try {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: city },
      headers: {
        "X-RapidAPI-Key": "7125cb4487mshbd965494bef31d7p153a39jsn9d6da199480f",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
