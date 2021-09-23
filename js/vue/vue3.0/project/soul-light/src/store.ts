import { createStore, Commit } from 'vuex';
import axios, { AxiosRequestConfig } from 'axios';
import { generateFitUrl } from '@/helper';

// response接口数据结构
export interface ResponseType<P = Record<string, unknown>> {
  code: number,
  msg: string;
  data: P
}

// 通用图片
export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string; // 创建日期
  fitUrl?: string; // 处理过后的url（格式，裁剪）
}

// 用户
export interface UserProps {
  isLogin: boolean; // 登录标志
  nickName?: string; // 昵称
  _id?: string;
  column?: string; // 专栏ID
  email?: string; // 邮箱
  avatar?: ImageProps; // 头像
  description?: string; // 人物介绍
}

// 专栏
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps; // 专栏图片
  description: string; // 专栏简介
}

// 文章
export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string; // 摘要
  content?: string; // 文章内容
  image?: ImageProps; // 文章头图
  createdAt?: string;
  column: string; // 专栏ID
  author?: string | UserProps; // 作者
  isHTML?: boolean; // 文章内容是否为HTML
}

// 通用网络错误处理结果标志
export interface GlobalErrorProps {
  status: boolean; // 状态
  message?: string; // 状态信息
}

// 通用网络处理结果数据
export interface GlobalDataProps {
  error: GlobalErrorProps;
  token: string; // 用户token
  loading: boolean; // loading标志
  columns: ColumnProps[]; // 专栏
  posts: PostProps[]; // 文章
  user: UserProps; // 用户
}

const getAndCommit = async (url: string, mutationName: string, commit: Commit) => {
  const { data } = await axios.get(url);
  commit(mutationName, data);
  return data;
}

const postAndCommit = async (url: string, mutationName: string, commit: Commit, payload: any) => {
  const { data } = await axios.post(url, payload);
  commit(mutationName, data);
  return data;
}

const asyncAndCommit = async (url: string, mutationName: string,
  commit: Commit, config: AxiosRequestConfig = { method: 'get' }) => {
  const { data } = await axios(url, config);
  commit(mutationName, data);
  return data;
}
const store = createStore<GlobalDataProps>({
  state: {
    error: { status: false },
    token: localStorage.getItem('token') || '',
    loading: false,
    columns: [],
    posts: [],
    user: { isLogin: false }
  },
  mutations: {
    createPost(state, newPost) {
      state.posts.push(newPost);
    },
    fetchColumns(state, rawData) {
      state.columns = rawData.data.list;
    },
    fetchColumn(state, rawData) {
      state.columns = [rawData.data];
    },
    fetchPosts(state, rawData) {
      state.posts = rawData.data.list;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, e: GlobalErrorProps) {
      state.error = e;
    },
    login(state, rawData) {
      const { token } = rawData.data;
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    logout(state) {
      state.token = '';
      localStorage.remove('token');
      delete axios.defaults.headers.common.Authorization;
    },
    fetchCurrentUser(state, rawData) {
      state.user = { isLogin: true, ...rawData.data };
    },
    fetchPost(state, rawData) {
      console.log(rawData);
      state.posts = [rawData.data];
    },
    updatePost(state, { data }) {
      state.posts = state.posts.map(post => {
        if (post._id === data._id) {
          return data;
        } else {
          return post;
        }
      })
    }
  },
  actions: {
    fetchColumns({ commit }) {
      return getAndCommit('/columns', 'fetchColumns', commit);
    },
    fetchColumn({ commit }, cid) {
      return getAndCommit(`/columns/${cid}`, 'fetchColumn', commit);
    },
    fetchPosts({ commit }, cid) {
      return getAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit);
    },
    login({ commit }, payload) {
      return postAndCommit('/user/login', 'login', commit, payload);
    },
    fetchCurrentUser({ commit }) {
      return getAndCommit('/user/current', 'fetchCurrentUser', commit);
    },
    loginAndFetch({ dispatch }, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser');
      })
    },
    createPost({ commit }, payload) {
      return postAndCommit('/posts', 'createPost', commit, payload);
    },
    fetchPost({ commit }, id) {
      return getAndCommit(`/posts/${id}`, 'fetchPost', commit);
    },
    updatePost({ commit }, { id, payload }) {
      return asyncAndCommit(`/posts/${id}`, 'updatePost', commit, {
        method: 'patch',
        data: payload
      })
    }
  },
  getters: {
    getColumnByCid: (state) => (cid: string) => {
      return state.columns.find(c => {
        if (c._id === cid && c.avatar) {
          generateFitUrl(c.avatar, 100, 100);
        } else if (c._id === cid && (!c.avatar || (c.avatar && !c.avatar.url))) {
          c.avatar = { fitUrl: require('@/assets/column.jpg') }
        }
        return c._id === cid
      });
    },
    getPostsByCid: (state) => (cid: string) => {
      return state.posts.filter(post => post.column === cid);
    },
    getCurrentPost: (state) => (cid: string) => {
      // console.log(state.posts)
      return state.posts.find(item => item._id === cid);
    }
  }
})

export default store
