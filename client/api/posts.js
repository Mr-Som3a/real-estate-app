import api from "./httpService"

export const getPosts = async ()=>await api.get('/api/posts')
export const createPost = async(reqbody)=>await api.post('/api/posts',reqbody)
export const putPost = async(reqbody,id)=> await api.put(`/api/posts/${id}`,reqbody)
export const deletePost = async(id)=>await api.delete(`/api/posts/${id}`)