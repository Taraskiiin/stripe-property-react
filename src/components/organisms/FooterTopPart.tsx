import styled from 'styled-components';

const FooterTopPartStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	h3 {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 32px;
		text-align: center;
		color: var(--white);
	}

	p {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		text-align: center;
		color: var(--secondaryLight);
	}
`;

export default function FooterTopPart() {
	return (
		<FooterTopPartStyled>
			<img alt='email-icon' src='assets/icons/email-icon.svg' />
			<h3>Newsletter subscribe</h3>
			<p>Subscribe to our newsletter, we promise not to spam!</p>
			<input type='email' />
		</FooterTopPartStyled>
	);
}
