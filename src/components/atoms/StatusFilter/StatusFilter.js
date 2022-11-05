import React from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import { SelectWrapper } from './StatusFilter.styles'

const StatusFilter = () => {
	const { statusHandler } = useTodoContext()
	return (
		<SelectWrapper name='status' id='status' onChange={statusHandler}>
			<option value='all'>All</option>
			<option value='completed'>Completed</option>
			<option value='uncompleted'>Uncompleted</option>
		</SelectWrapper>
	)
}

export default StatusFilter
