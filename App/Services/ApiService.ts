import { create } from 'apisauce'

const BASE_URL = 'https://jsonplaceholder.typicode.com/users/'
const API_KEY_NAME = ""

const api = create({
  baseURL: BASE_URL,
  headers: { 
    Accept: 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  timeout: 10000,
})

let key: string = ""
function setKey(value: string) {
  key = value
}

function login(userName: string, password: string) {
  const data = {
    username: userName,
    password
  }
  
  return api.post(`key/name/${API_KEY_NAME}`, data)
}

export default {
  setKey,
  
  login,
}
