import Logo from '../atoms/Logo';
import NumberBlocks from '../organisms/NumberBlocks';
import styled from 'styled-components';

const MainSectionStyled = styled.section`
	background-image: url('assets/main-bg.png');
	overflow: hidden;
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
		top: 40%;
		transform: translate(-50%, -50%);
	}

	@media (max-width: 1390px) {
		width: 100%;

		.logo-block {
			left: 50%;
			top: 10%;
			transform: translate(-50%, -50%);
		}

		.main-title {
			font-size: 36px;
			line-height: 48px;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}

		.numbers-wrapper {
			display: none;
		}
	}

	@media (max-width: 920px) {
		height: 50vh;

		.main-title {
			font-size: 22px;
			line-height: 26px;
			width: 80%;
		}
	}
`;

export default function MainSection() {
	return (
		<MainSectionStyled>
			<Logo />
			<h1 className='main-title'>
				Bespoke property developer specialising in digital
			</h1>
			<NumberBlocks />
		</MainSectionStyled>
	);
}
