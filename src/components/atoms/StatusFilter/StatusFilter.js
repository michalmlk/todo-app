import React from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import { SelectWrapper } from './StatusFilter.styles'

const StatusFilter = () => {
	const { statusHandler, todos } = useTodoContext()
	return (
		<SelectWrapper name='status' id='status' onChange={statusHandler} disabled={todos.length === 0}>
			<option value='all'>All</option>
			<option value='completed'>Completed</option>
			<option value='uncompleted'>Uncompleted</option>
		</SelectWrapper>
	)
}

export default StatusFilter
