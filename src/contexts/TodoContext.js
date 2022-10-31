import React, { useContext, createContext } from 'react'
import { v4 as V4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

export const TodoContext = createContext({
	todos: [],
	addTodo: () => {},
	deleteTodo: () => {},
})

export const useTodoContext = () => {
	return useContext(TodoContext)
}

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useLocalStorage('todos', [])

	const addTodo = title => {
		setTodos(prevTodos => {
			return [{ id: V4(), title, isDone: false }, ...prevTodos]
		})
	}

	const deleteTodo = todoId => {
		const updatedTodos = todos.filter(todo => todo.id !== todoId)
		setTodos(updatedTodos)
	}

	return (
		<TodoContext.Provider
			value={{
				todos,
				addTodo,
				deleteTodo,
			}}>
			{children}
		</TodoContext.Provider>
	)
}
