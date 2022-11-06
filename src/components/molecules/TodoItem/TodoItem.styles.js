import styled from 'styled-components'

export const TodoCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 7px 15px;
	margin-bottom: 10px;
	border-radius: 3px;
	border: 1px solid
		${({ completed, theme }) => {
			if (completed === true) return theme.colors.completed
			return '#fff'
		}};
	font-size: 18px;
	max-width: 768px;
	width: 100%;
	background-color: ${({ completed, theme }) => {
		if (completed === true) {
			return theme.colors.completed
		}
		return '#fff'
	}};
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease;

	p {
		text-decoration-line: ${({ completed }) => (completed ? 'line-through' : 'none')};
	}
`

export const ButtonArea = styled.div`
	display: flex;
	gap: 1rem;

	button {
		width: 32px;
		height: 32px;
		border: none;
		background-color: transparent;
		transition: background-color 0.1s;
		font-size: 20px;
		color: ${({ theme }) => theme.colors.colorDark};

		&:hover {
			cursor: pointer;
		}
		&:nth-child(1):hover {
			color: ${({ theme }) => theme.colors.green};
		}
		&:nth-child(2):hover {
			color: ${({ theme }) => theme.colors.pinkyRed};
		}
	}
`
