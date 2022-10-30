import styled from 'styled-components'

export const TodoInput = styled.div`
	form {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 10px auto;

		input {
			height: 30px;
			padding-left: 10px;
			border: 1px solid #ddd;
			border-radius: 5px;
			width: 100%;
		}
		button {
			border-radius: 5px;
			border: 1px solid #ddd;
			margin-left: 10px;
			height: 30px;
			width: 100px;
		}
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 768px;
	gap: 2rem;
	padding: 15px;
`

export const TodoItemsList = styled.div`
	max-height: 50vh;
	overflow-y: scroll;
`
