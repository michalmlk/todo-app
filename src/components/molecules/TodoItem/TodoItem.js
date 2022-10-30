import React from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import { TodoCard, ButtonArea } from './TodoItem.styles'

const TodoItem = ({ title, id }) => {
	const { deleteTodo } = useTodoContext()

	return (
		<TodoCard>
			<p>{title}</p>
			<ButtonArea>
				<button>edit</button>
				<button onClick={() => deleteTodo(id)}>x</button>
			</ButtonArea>
		</TodoCard>
	)
}

export default TodoItem
