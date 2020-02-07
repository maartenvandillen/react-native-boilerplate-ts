import axios from 'axios'
import { is, curryN, gte } from 'ramda'

const BASE_URL = 'https://jsonplaceholder.typicode.com/users/'

const isWithin = curryN(3, (min: number, max: number, value: number) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const apiClient = axios.create({
  /**
   * Import the config from the App/Config/index.ts file
   */
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function login(userName: string, password: string) {
  // Simulate an error 50% of the time just for testing purposes
  // if (Math.random() > 0.5) {
  //   return new Promise(function(resolve) {
  //     resolve(null)
  //   })
  // }

  let number = Math.floor(Math.random() / 0.1) + 1

  return apiClient.get(number.toString()).then((response) => {
    if (in200s(response.status)) {
      return response.data
    } else {
      return new Promise(function(resolve) {
        resolve(null)
      })
    }
  })
}

export const api = {
  login,
}
