import React, { useState, useRef } from 'react'
import { TodoInputWrapper } from './TodoInput.styles'
import { useTodoContext } from '../../../contexts/TodoContext'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatusFilter from '../StatusFilter/StatusFilter'

const TodoInput = () => {
	const [isDisabled, setIsDisabled] = useState(true)

	const todoTitleRef = useRef()
	const { addTodo, filterTodo } = useTodoContext()

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
		<TodoInputWrapper>
			<form onSubmit={handleSubmit}>
				<input type='text' required placeholder='Type your todo' onChange={disabledHandler} ref={todoTitleRef} />
				<StatusFilter onChange={filterTodo} />
				<button type='submit' disabled={isDisabled}>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</form>
		</TodoInputWrapper>
	)
}

export default TodoInput
