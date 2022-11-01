import React, { useRef } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import TodoItem from '../TodoItem/TodoItem'
import { TodoInput, Wrapper, TodoItemsList } from './AddTodoField.styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddTodoField = () => {
	const todoTitleRef = useRef()
	const { addTodo, todos } = useTodoContext()

	const handleSubmit = e => {
		e.preventDefault()
		addTodo(todoTitleRef.current.value)
		todoTitleRef.current.value = ''
	}

	return (
		<Wrapper>
			<TodoInput>
				<form onSubmit={handleSubmit}>
					<input type='text' required placeholder='type your todo' ref={todoTitleRef} />
					<button type='submit'>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</form>
			</TodoInput>
			<TodoItemsList>
				{todos.map(todo => {
					return <TodoItem title={todo.title} id={todo.id} key={todo.id} />
				})}
			</TodoItemsList>
		</Wrapper>
	)
}

export default AddTodoField
