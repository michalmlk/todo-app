import React from 'react'
import styled from 'styled-components'
import { useTodoContext } from '../../../contexts/TodoContext'

export const StyledTodoEditModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5px;
	box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	input {
		width: 90%;
		height: 40px;
		font-size: 18px;
		border-radius: 5px;
	}
`

const EditTodoModal = todoId => {
	const { todos } = useTodoContext()

	const editedTodo = todos.map(el => el.id === todoId)

	return (
		<StyledTodoEditModal>
			<h2>Edit todo</h2>
			<input type='text' value={editedTodo.title} />
		</StyledTodoEditModal>
	)
}

export default EditTodoModal
