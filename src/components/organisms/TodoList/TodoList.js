import React, { useRef, useState } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import TodoItem from '../../molecules/TodoItem/TodoItem'
import { TodoInput, Wrapper, TodoItemsList } from './TodoList.styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Scrollbars from 'react-custom-scrollbars-2'

const TodoList = () => {
	const [isDisabled, setIsDisabled] = useState(true)

	const todoTitleRef = useRef()
	const { addTodo, todos } = useTodoContext()
	const handleSubmit = e => {
		e.preventDefault()
		addTodo(todoTitleRef.current.value)
		todoTitleRef.current.value = ''
		setIsDisabled(true)
	}

	const disabledHandler = () => {
		todoTitleRef.current.value === '' ? setIsDisabled(true) : setIsDisabled(false)
	}

	return (
		<Wrapper>
			<TodoInput>
				<form onSubmit={handleSubmit}>
					<input type='text' required placeholder='type your todo' onChange={disabledHandler} ref={todoTitleRef} />
					<button type='submit' disabled={isDisabled}>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</form>
			</TodoInput>
			<TodoItemsList todos={todos}>
				<Scrollbars>
					{todos.length !== 0 ? (
						todos.map(todo => {
							return <TodoItem title={todo.title} id={todo.id} key={todo.id} isCompleted={todo.status} />
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
