import styled from 'styled-components'

export const TodoCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 7px 15px;
	margin-bottom: 10px;
	border-radius: 5px;
	border: 1px solid #ddd;
	font-size: 18px;
	max-width: 768px;
	width: 100%;
	background-color: #fff;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

	p {
		text-decoration-line: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
		font-style: ${({ isDone }) => (isDone ? 'italic' : 'normal')};
	}
`

export const ButtonArea = styled.div`
	display: flex;
	gap: 1rem;

	button {
		width: 35px;
		height: 35px;
		border: none;
		background-color: transparent;
		transition: background-color 0.1s;
		font-size: 24px;

		&:hover {
			cursor: pointer;
		}
		&:nth-child(1):hover {
			color: green;
		}
		&:nth-child(2):hover {
			color: red;
		}
	}
`
