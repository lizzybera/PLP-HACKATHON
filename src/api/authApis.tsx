import axios from "axios"

const url : string = "http://localhost:27017/api"

export const register = async(data : any) =>{
    try {
        return axios.post(`${url}/register`, data).then((res : any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const signIn = async(data : any) =>{
    try {
        return axios.post(`${url}/sign-in`, data).then((res : any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const verify = async(data : any) =>{
    try {
        return axios.post(`${url}/verify`, data).then((res : any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}