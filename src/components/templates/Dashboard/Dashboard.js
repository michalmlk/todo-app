import React from 'react'
import { TodoProvider } from '../../../contexts/TodoContext'
import AddTodoField from '../../molecules/AddTodoField/AddTodoField'
import { DashboardWrapper } from './Dashboard.styles'

const Dashboard = () => {
	return (
		<TodoProvider>
			<DashboardWrapper>
				<h1>Todo list</h1>
				<AddTodoField />
			</DashboardWrapper>
		</TodoProvider>
	)
}

export default Dashboard
