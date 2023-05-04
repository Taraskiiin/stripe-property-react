import styled from 'styled-components';

const FooterTopPartStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export default function FooterTopPart() {
	return (
		<FooterTopPartStyled>
			<img alt='email-icon' src='assets/icons/email-icon.svg' />
		</FooterTopPartStyled>
	);
}
