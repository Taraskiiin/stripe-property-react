import styled from 'styled-components';

const FooterBottomPartStyled = styled.div`
	position: relative;
	width: calc(100% - 336px);
	margin: 0 auto;
	padding-top: 34px;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	display: flex;
	justify-content: center;
	gap: 16px;

	a {
		dispaly: block;
		text-decoration: none;
		position: relative;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
		color: var(--secondaryLight);

		&::after {
			content: '';
			height: 100%;
			width: 1px;
			background-color: var(--secondaryLight);
			position: absolute;
			right: -8px;
		}

		&:last-child {
			&::after {
				display: none;
			}
		}
	}
`;

export default function FooterBottomPart() {
	return (
		<FooterBottomPartStyled>
			<a href='#'>© 2023 Stripe Homes</a>
			<a href='#'>Privacy Policy</a>
			<a href='#'>Terms & Conditions</a>
		</FooterBottomPartStyled>
	);
}
