import React, { useState } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import { TodoCard, ButtonArea } from './TodoItem.styles'
import { faTrashCan, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoItem = ({ title, id, completed }) => {
	const { deleteTodo, completeTodos } = useTodoContext()

	const completeTodoHandler = () => {
		completeTodos(id)
	}

	return (
		<TodoCard completed={completed}>
			<p>{title}</p>
			<ButtonArea>
				<button onClick={completeTodoHandler}>
					{completed === true ? <FontAwesomeIcon icon={faArrowRotateLeft} /> : <FontAwesomeIcon icon={faCircleCheck} />}
				</button>
				<button onClick={() => deleteTodo(id)}>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
			</ButtonArea>
		</TodoCard>
	)
}

export default TodoItem
