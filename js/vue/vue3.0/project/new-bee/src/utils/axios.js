import axios from 'axios'
import router from '../router'
import { Toast } from "vant";

axios.defaults.baseURL = '//47.99.134.126:28019/api/v1';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers["token"] = localStorage.getItem("token") || "";
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res);
  }
  if (res.data.resultCode !== 200) {
    res.data.message && Toast.fail(res.data.message);
    res.data.resultCode === 416 && router.push({ path: "/login" });
    return Promise.reject(res.data);
  }
  return res.data;
})

export default axios;