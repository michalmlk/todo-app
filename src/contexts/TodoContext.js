import React, { useContext, createContext, useState } from 'react'
import { v4 as V4 } from 'uuid'

export const TodoContext = createContext({
	todos: [],
	addTodo: () => {},
	deleteTodo: () => {},
	filterTodos: () => {},
	completeTodos: () => {},
	statusHandler: () => {},
	filteredTodos: [],
})

export const useTodoContext = () => {
	return useContext(TodoContext)
}

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([])
	const [status, setStatus] = useState('all')
	const [filteredTodos, setFilteredTodos] = useState([])

	const addTodo = title => {
		setTodos(prevTodos => {
			return [{ id: V4(), title: title, completed: false }, ...prevTodos]
		})
	}

	const completeTodos = id => {
		setTodos(
			todos.map(item => {
				if (item.id === id) {
					return {
						...item,
						completed: !item.completed,
					}
				}
				return item
			})
		)
	}

	const statusHandler = e => {
		setStatus(e.target.value)
	}

	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]))
		} else {
			const todoFromLocal = JSON.parse(localStorage.getItem('todos'))
			setTodos(todoFromLocal)
		}
	}

	React.useEffect(() => {
		getLocalTodos()
	}, [])

	React.useEffect(() => {
		filterTodos()
		saveLocalTodos()
	}, [todos, status])

	const deleteTodo = todoId => {
		const updatedTodos = todos.filter(todo => todo.id !== todoId)
		setTodos(updatedTodos)
	}

	const filterTodos = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter(todo => todo.completed === true))
				break
			case 'uncompleted':
				setFilteredTodos(todos.filter(todo => todo.completed === false))
				break
			default:
				setFilteredTodos(todos)
		}
	}

	return (
		<TodoContext.Provider
			value={{
				todos,
				addTodo,
				deleteTodo,
				filterTodos,
				completeTodos,
				statusHandler,
				filteredTodos,
			}}>
			{children}
		</TodoContext.Provider>
	)
}
