import React ,  { useState } from 'react'
import { todoStore } from './zustand/todoStore'
// import './App.css'
import deleteIcon from './assets/delete.png';

function App() {
  const [todo, setTodo] = useState<string>('')
  const addTodo = todoStore((state) => state.addTodo)
  const todoList = todoStore((state) => state.todos)
  const removeTodo = todoStore((state) => state.removeTodo)
  const toggleTodo = todoStore((state) => state.toggleTodo)
  //generate a random 6 digit unique id
  const generateId = () => {
    return Math.floor(Math.random() * 1000000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo.length > 0) {
      addTodo({
        id: generateId(),
        todo: todo,
        completed: false
      })
    }
    setTodo('')
    }
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[400px] p-5 rounded-lg shadow-lg bg-[#242424] ">
          <h1 className="font-bold text-3xl">Todos</h1>
          <p>Add your todos</p>
          <form onSubmit={handleSubmit}>
            <div className=" mt-3">
              <input type="text" placeholder="enter your todo" value={todo} onChange={(e)=> setTodo(e.target.value)} className="w-full h-10 p-2 bg-[#282828] outline-red-400 border-red-400 rounded-lg " />
            </div>
          </form>
          <div className='mt-5'>
            {todoList.length > 0 && todoList.map((item) => (
              <div key={item.id} className='w-full p-2 mt-2 rounded-lg border border-r-green-400 flex justify-between items-center '>
                <h1 className={`${item.completed ? "line-through" : "" }`} >{item.todo}</h1>
                <div className='flex'>
                  <input type="checkbox" onChange={(e)=>toggleTodo(item.id,e.target.checked)} />
                  <img src={deleteIcon} alt="delete" className="w-5 ml-2 h-5 cursor-pointer" onClick={()=>removeTodo(item.id)} />

                </div>

              </div>
            ))}
            </div>
        </div>
        
        </div>
    </>
  )
}

export default App
