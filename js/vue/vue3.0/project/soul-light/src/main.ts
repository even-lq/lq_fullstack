import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import { Search } from 'vant';
import './assets/reset.css';

const app = createApp(App);
axios.defaults.baseURL = 'http://apis.imooc.com/api/';
const icode = '7BE6DC09A4387168';
axios.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    icode
  }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', icode)
  } else {
    // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: icode }
  }
  store.commit('setLoading', true);
  store.commit('setError', { status: false, message: '' });
  return config;
})

axios.interceptors.response.use(config => {
  store.commit('setLoading', false);
  return config;
}, e => {
  console.log(e);
  const { error, detail } = e.response.data;
  console.log(detail)
  store.commit('setError', { status: true, message: (detail && detail[0] && detail[0].message) || error });
  store.commit('setLoading', false);
  return Promise.reject(error);
})
app
  .use(router)
  .use(store)
  .use(Search)
  .mount('#app');
