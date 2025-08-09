import api from "./httpService"

export const checkAuth = async ()=> await api.get(`/auth/check`)
export const signup = async (body)=> await api.post(`/auth/signup`,body)
export const login = async (body)=> await api.post(`/auth/login`,body)
export const logout = async ()=> await api.post(`/auth/logout`)
