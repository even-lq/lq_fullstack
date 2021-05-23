import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import TodoForm from './TodoForm';
import axios from './api/axios';
// ts + react 类型检测
// 1. 内置
// 2. npm i @types/react
// 3. Prop State type interface 自定义类型  models
//  Todo Todos Promise<Todos>
type Todo = {
  id: number
  name: string
  done: boolean
}

// 元组
type Todos = Todo[]

const App:React.FC = () => {
  // useState返回值约束
  const [todos, setTodos] = useState<Todos>([]);
  const onToggleTodo = (todo:Todo) => {

  }


  const refreshTodos = () => {
    // todos
    axios<Todos>('/api/todos').then(setTodos)
  }

  useEffect(() => {
    refreshTodos()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm refreshTodos = {refreshTodos}
        <ul>
          {
            todos.map((todo, index) => (
                <li
                  key={index}
                  className={classNames({done: todo.done})}
                  onClick={() => onToggleTodo(todo)}
                  >
                  {todo.name}
                </li>
              )
            )
          }
        </ul>
      </header>
    </div>
  )
}

export default App;
