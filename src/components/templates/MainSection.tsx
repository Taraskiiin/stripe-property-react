import Logo from '../atoms/Logo';
import NumberBlocksStyled from '../organisms/NumberBlocks';
import styled from 'styled-components';

const MainSectionStyled = styled.section`
	background-image: url('assets/main-bg.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100vw;
	height: 100vh;
	position: relative;

	.logo-block {
		position: absolute;
		top: 32px;
		left: 64px;
	}

	.main-title {
		position: absolute;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-size: 56px;
		line-height: 72px;
		text-align: center;
		color: #ffffff;
		max-width: 70%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;

export default function MainSection() {
	return (
		<MainSectionStyled>
			<Logo />
			<h1 className='main-title'>
				Bespoke property developer specialising in digital
			</h1>
			<NumberBlocksStyled />
		</MainSectionStyled>
	);
}
