import React, { useState } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import { TodoCard, ButtonArea } from './TodoItem.styles'

const TodoItem = ({ title, id }) => {
	const { deleteTodo } = useTodoContext()
	const [isDone, setIsDone] = useState(false)

	const isDoneHandler = () => {
		setIsDone(prevState => !prevState)
	}

	return (
		<TodoCard isDone={isDone}>
			<p>{title}</p>
			<ButtonArea>
				<button onClick={isDoneHandler}>{isDone ? 'undo' : 'done'}</button>
				<button>edit</button>
				<button onClick={() => deleteTodo(id)}>x</button>
			</ButtonArea>
		</TodoCard>
	)
}

export default TodoItem
