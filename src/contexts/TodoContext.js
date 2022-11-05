import React, { useContext, createContext, useState } from 'react'
import { v4 as V4 } from 'uuid'

export const TodoContext = createContext({
	todos: [],
	addTodo: () => {},
	deleteTodo: () => {},
})

export const useTodoContext = () => {
	return useContext(TodoContext)
}

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([])

	const addTodo = title => {
		setTodos(prevTodos => {
			return [{ id: V4(), title }, ...prevTodos]
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
