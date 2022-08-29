import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/',
})

export function getCategoriesReq() {
  return instance.get(`categories?api_key=${process.env.REACT_APP_API_KEY}`)
}
export function getRandomReq() {
  return instance.get('random?api_key=7ZDy4CsPTDmaBmM5nxP1FPF62SVDgtGJ&tag=&rating=g')
}
