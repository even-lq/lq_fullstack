import React from 'react';
import axios from './api/axios'
// 流程
// 1. propt refreshTodos
// 2. React.FC
// 3. change React.Change<HTMLInputElement>

// 与type的区别，外面穿过来的
interface Props {
  refreshTodos: () => void // 返回值为空
}



const TodoForm:React.FC<Props> = ({refreshTodos}) => {
  const [name, setName] = React.useState('')
  const onChange = (e:React.Change<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onSubmit = (e: React.Change<HTMLInputElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      name,
      done: false
    }

    if (name.trim()) {
      axios("/api/add", newTodo);
      refreshTodos()
      setName('')
    }
  };
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="todo-input"
        value={name}
        onChange={onChange}
        placeholder="请输入待办事项"
      />
      <button type="submit">新增</button>
    </form>
  );
}

export default TodoForm