import FooterTopPart from '../organisms/FooterTopPart';
import FooterMiddlePart from '../organisms/FooterMiddlePart';
import styled from 'styled-components';

const FooterStyled = styled.footer`
	width: 100%;
	background-color: var(--primary);
	display: flex;
	flex-direction: column;
	gap: 160px;
	padding: 120px 0 34px 0;
`;

export default function Footer() {
	return (
		<FooterStyled>
			<FooterTopPart />
			<FooterMiddlePart />
		</FooterStyled>
	);
}
