import styled from 'styled-components'

export const SelectWrapper = styled.select`
	margin-bottom: 20px;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.colorDark};
	font-size: 18px;
	font-family: 'Montserrat', sans-serif;
	height: 40px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
	outline: none;

	option:not(first-child) {
		color: #000;
	}
`
