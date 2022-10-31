import styled from 'styled-components'

export const TodoInput = styled.div`
	form {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 10px auto;

		input {
			height: 40px;
			padding-left: 20px;
			border: 1px solid #ddd;
			border-radius: 5px;
			width: 100%;
			font-size: 18px;

			&::placeholder {
				color: #aaa;
			}
		}
		button {
			border-radius: 5px;
			border: 1px solid #ddd;
			margin-left: 10px;
			height: 40px;
			width: 100px;
			font-size: 18px;
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
