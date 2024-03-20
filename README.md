# Todo Zustand

This project is a simple Todo application built with React, TypeScript, and Vite. It uses Zustand for state management and Tailwind CSS for styling.

## Setup

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate into the project directory:
```bash
cd todo_zustand
```

3. Install the dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run devnpm run dev
```
Now, you can open http://localhost:5173 in your browser to see the application.

## Zustand
Zustand is a small, fast and scaleable bearbones state-management solution. It has a simple and intuitive API that allows you to focus on your application logic rather than dealing with complex state management patterns.

Here's a simple example of how Zustand is used in this project:
```ts
import create from 'zustand';

// Define your store
const useStore = create(set => ({
  todos: [],
  addTodo: (todo) => set(state => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  toggleTodo: (id) => set(state => ({ todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo) })),
}))

// In your component
const todos = useStore(state => state.todos);
const addTodo = useStore(state => state.addTodo);
```
In the example above, useStore is a custom hook that gives you access to your state and actions. You can use this hook in your components to interact with your state.


## Tailwind CSS
Tailwind CSS is a utility-first CSS framework that is highly customizable and allows for rapid UI development. It provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.

In this project, Tailwind CSS is used for styling the components. It allows for a more efficient and maintainable way of writing styles, as it eliminates the need for writing custom CSS classes for each component.

Here's an example of how Tailwind CSS is used in this project:
```ts
<div className="flex items-center justify-between p-6 bg-white shadow">
  <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
  <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
    Add Todo
  </button>
</div>
```
In the example above, the flex, items-center, justify-between, p-6, bg-white, and shadow classes are all utility classes provided by Tailwind CSS. They respectively set the display to flex, align items in the center, justify content space between, set padding to 1.5rem, set the background color to white, and apply a box shadow.

Tailwind CSS also supports responsive design out of the box. By prefixing a utility with a breakpoint, you can apply it at specific screen sizes. For example, md:text-center would apply the text-center utility at medium screen sizes and above.

Tailwind CSS is configured in the tailwind.config.js file, where you can customize the default theme, add plugins, and specify content paths for PurgeCSS.