import styled from 'styled-components'

export const TodoInputWrapper = styled.div`
	form {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 10px auto;

		input {
			height: 40px;
			border: 1px solid #ddd;
			width: 100%;
			font-size: 18px;
			font-family: 'Montserrat', sans-serif;
			border: none;
			border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
			background-color: transparent;
			outline: none;
			color: ${({ theme }) => theme.colors.colorDark};

			&::placeholder {
				color: #aaa;
				transition: all 0.2s ease;
			}

			&:focus::placeholder {
				transform: translateX(100%);
				opacity: 0;
			}
		}
		select {
			background-color: transparent;
			color: ${({ theme }) => theme.colors.lightGrey};
			font-size: 18px;
			border: none;
			border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
			outline: none;

			option:not(first-child) {
				color: #000;
			}
		}
		button {
			border-radius: 5px;
			border: 1px solid ${({ theme }) => theme.colors.colorDark};
			margin-left: 10px;
			height: 40px;
			width: 40px;
			font-size: 18px;
			color: ${({ theme }) => theme.colors.lightGrey};
			background-color: transparent;
			transition: all 0.2s ease;

			&:hover {
				background-color: #fff;
				color: ${({ theme }) => theme.colors.black};
			}
		}
	}
`
