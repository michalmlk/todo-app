import React, { useRef } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import EditTodoModal from '../EditTodoModal/EditTodoModal'
import TodoItem from '../TodoItem/TodoItem'
import { TodoInput, Wrapper, TodoItemsList } from './AddTodoField.styles'

const AddTodoField = () => {
	const todoTitleRef = useRef()
	const { addTodo, todos, isEditModalOpen } = useTodoContext()

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
					<button type='submit'>Add</button>
				</form>
			</TodoInput>
			<TodoItemsList>
				{todos.map(todo => {
					return (
						<>
							<TodoItem title={todo.title} id={todo.id} />
							{isEditModalOpen && <EditTodoModal todoId={todo.id} />}
						</>
					)
				})}
			</TodoItemsList>
		</Wrapper>
	)
}

export default AddTodoField
