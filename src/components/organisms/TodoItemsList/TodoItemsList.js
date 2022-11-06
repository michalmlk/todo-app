import React from 'react'
import styled from 'styled-components'
import Scrollbars from 'react-custom-scrollbars-2'
import { useTodoContext } from '../../../contexts/TodoContext'
import TodoItem from '../../molecules/TodoItem/TodoItem'

export const TodoItemsListWrapper = styled.div`
	height: 50vh;
	padding: 10px;
	border-radius: 5px;

	h3 {
		font-weight: lighter;
		color: #ddd;
		text-align: center;
	}
`

const TodoItemsList = () => {
	const { todos, filteredTodos } = useTodoContext()
	return (
		<TodoItemsListWrapper todos={todos}>
			<Scrollbars>
				{filteredTodos.length !== 0 ? (
					filteredTodos.map(todo => {
						return <TodoItem title={todo.title} id={todo.id} key={todo.id} completed={todo.completed} />
					})
				) : (
					<h3>Nothing to do</h3>
				)}
			</Scrollbars>
		</TodoItemsListWrapper>
	)
}

export default TodoItemsList
