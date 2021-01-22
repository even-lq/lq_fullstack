export default {
  method: 'post',
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/x-www-form-ulencoded'
  },
  data: {},
  timeout: 10000,
  // 如果为true则每次请求时都会带上浏览器的cookie
  withCredentials: false, // 携带凭证
  responseType: 'json'

}