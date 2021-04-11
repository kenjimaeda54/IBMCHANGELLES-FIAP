import axios from 'axios'

 //http://127.0.0.1:1880/conversa

 const api = axios.create({
   
    baseURL: "http://127.0.0.1:1880/conversa"
  

 })

 export default api;