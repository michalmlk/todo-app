import React, { useRef, useState } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import TodoItem from '../../molecules/TodoItem/TodoItem'
import { TodoInput, Wrapper, TodoItemsList } from './TodoList.styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Scrollbars from 'react-custom-scrollbars-2'

const TodoList = () => {
	const todoTitleRef = useRef()
	const { addTodo, todos } = useTodoContext()
	const [priority, setPriority] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		addTodo(todoTitleRef.current.value, priority)
		todoTitleRef.current.value = ''
	}

	const setPriorityHandler = e => {
		setPriority(e.target.value)
	}

	return (
		<Wrapper>
			<TodoInput>
				<form onSubmit={handleSubmit}>
					<input type='text' required placeholder='type your todo' ref={todoTitleRef} />
					<select onChange={setPriorityHandler} name='priority' id='priority-select'>
						<option value=''>Set priority</option>
						<option value='can_wait'>Can wait</option>
						<option value='important'>Important</option>
						<option value='critical'>Critical</option>
					</select>
					<button type='submit'>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</form>
			</TodoInput>
			<TodoItemsList todos={todos}>
				<Scrollbars>
					{todos.length !== 0 ? (
						todos.map(todo => {
							return <TodoItem title={todo.title} id={todo.id} key={todo.id} />
						})
					) : (
						<h3>Nothing to do</h3>
					)}
				</Scrollbars>
			</TodoItemsList>
		</Wrapper>
	)
}

export default TodoList
