import React, { useState } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import { TodoCard, ButtonArea } from './TodoItem.styles'
import { faTrashCan, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoItem = ({ title, id }) => {
	const { deleteTodo } = useTodoContext()
	const [isDone, setIsDone] = useState(false)

	const isDoneHandler = () => {
		setIsDone(prevState => !prevState)
	}

	return (
		<>
			<TodoCard isDone={isDone}>
				<p>{title}</p>
				<ButtonArea>
					<button onClick={isDoneHandler}>
						{isDone ? <FontAwesomeIcon icon={faArrowRotateLeft} /> : <FontAwesomeIcon icon={faCircleCheck} />}
					</button>
					<button onClick={() => deleteTodo(id)}>
						<FontAwesomeIcon icon={faTrashCan} />
					</button>
				</ButtonArea>
			</TodoCard>
		</>
	)
}

export default TodoItem
