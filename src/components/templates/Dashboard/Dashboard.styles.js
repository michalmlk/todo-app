import styled from 'styled-components'

export const DashboardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	padding-top: 10%;
	background: ${({ theme }) => theme.backgrounds.backgroundDark};

	h1 {
		color: ${({ theme }) => theme.colors.colorDark};
		font-weight: lighter;
		margin-bottom: 30px;
	}

	@media (min-width: 1024px) {
		h1 {
			font-size: 48px;
		}
	}
`
