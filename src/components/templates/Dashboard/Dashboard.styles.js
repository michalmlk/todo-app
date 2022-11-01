import styled from 'styled-components'

export const DashboardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	padding-top: 10%;
	background: linear-gradient(180deg, rgba(0, 30, 101, 1) 0%, rgba(9, 12, 13, 1) 100%, rgba(0, 34, 255, 1) 100%);

	h1 {
		color: #ddd;
		font-weight: lighter;
		margin-bottom: 30px;
	}

	@media (min-width: 1024px) {
		h1 {
			font-size: 48px;
		}
	}
`
