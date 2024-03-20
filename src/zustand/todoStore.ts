import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

type TodoType = {
    id: number,
    todo: string,
    completed: boolean
    loading?: boolean
}

type States = {
    todos:Array<TodoType>| [],
}

type Actions = {
    addTodo: (todo: TodoType) => void,
    removeTodo: (id: number) => void,
    toggleTodo: (id: number, isChecked:boolean) => void,
}


export const todoStore = create<States & Actions>()(devtools(
    persist(
        (set) => ({
            todos: [],
            addTodo: (todo: TodoType) => set((state) => ({ todos: [...state.todos, todo] })),
            removeTodo: (id: number) => set((state) => ({ todos: state.todos.filter((todo: TodoType) => todo.id !== id) })),
            toggleTodo: (id: number, isChecked:boolean) => set((state) => ({ todos: state.todos.map((item)=> item.id===id ? {...item, completed: isChecked} : item)})),
        }),
        {
            name: "todo-storage",
        }
    )
))

