import React from 'react'
import { TodoProvider, useTodoContext } from '../../../contexts/TodoContext'
import { DashboardWrapper, TodoWrapper } from './Dashboard.styles'
import TodoInput from '../../atoms/TodoInput/TodoInput'
import TodoItemsList from '../../organisms/TodoItemsList/TodoItemsList'

const Dashboard = () => {
	return (
		<TodoProvider>
			<DashboardWrapper>
				<TodoWrapper>
					<h1>Todo List</h1>
					<TodoInput />
					<TodoItemsList />
				</TodoWrapper>
			</DashboardWrapper>
		</TodoProvider>
	)
}

export default Dashboard
