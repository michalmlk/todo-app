import React from 'react'
import { TodoProvider } from '../../../contexts/TodoContext'
import TodoList from '../../organisms/TodoList/TodoList'
import { DashboardWrapper } from './Dashboard.styles'

const Dashboard = () => {
	return (
		<TodoProvider>
			<DashboardWrapper>
				<h1>Todo list</h1>
				<TodoList />
			</DashboardWrapper>
		</TodoProvider>
	)
}

export default Dashboard
