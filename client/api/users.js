import api from "./httpService"

export const getUsers = async ()=>await api.get('/users')
export const createUser = async(reqbody)=>await api.post('/users',reqbody)
export const putUser = async(reqbody,id)=> await api.put(`/users/${id}`,reqbody)
export const deleteUser = async(id)=>await api.delete(`/users/${id}`)