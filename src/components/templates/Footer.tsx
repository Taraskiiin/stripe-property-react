import FooterTopPart from '../organisms/FooterTopPart';
import FooterMiddlePart from '../organisms/FooterMiddlePart';
import FooterBottomPart from '../organisms/FooterBottomPart';
import styled from 'styled-components';

const FooterStyled = styled.footer`
	width: 100%;
	background-color: var(--primary);
	display: flex;
	flex-direction: column;
	gap: 160px;
	padding: 120px 0 34px 0;

	@media (max-width: 1390px) {
		padding: 34px 0 34px 0;
		gap: 60px;
	}
`;

export default function Footer() {
	return (
		<FooterStyled>
			<FooterTopPart />
			<FooterMiddlePart />
			<FooterBottomPart />
		</FooterStyled>
	);
}
