let todos = [
  {
    id: 1,
    name: "待办1",
    done: false,
  },
  {
    id: 2,
    name: "待办2",
    done: false,
  },
  {
    id: 3,
    name: "待办3",
    done: false,
  },
];
type URL = '/api/todos' | '/api/toggle' | '/api/add'
// <T>代指一个类型，传一个类型进来，返回也是什么类型
// ?问号 可有可无
const axios = <T>(url: URL, payload?:any): Promise<T> => {
  let data
  switch (url) {
    case "/api/todos": {
      data = todos.slice();
      break;
    }
    case "/api/add": {
      todos.push();
      break;
    }
    case "/api/toggle": {
      const todo = todos.find(({id}) => id === payload);
      if (todo) {
        todo.done = !todo.done
      }
      break;
    }
  }
  return Promise.resolve(data as any); // 可以是任何类型
};
export default axios