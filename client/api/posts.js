import api from "./httpService"

export const getPosts = async ()=>await api.get('/posts')
export const createPost = async(reqbody)=>await api.post('/posts',reqbody)
export const putPost = async(reqbody,id)=> await api.put(`/posts/${id}`,reqbody)
export const deletePost = async(id)=>await api.delete(`/posts/${id}`)