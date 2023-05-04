import styled from 'styled-components';

interface GridItem {
	image: string;
	text: string;
}

interface GridItemStyled {
	image: string;
}

const GridItemStyled = styled.div<GridItemStyled>`
	width: 480px;
	background-image: url(${(props) => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 480px;
		height: 100%;
		background-color: rgba(33, 43, 54, 0.5);
		z-index: 2;
	}

	p {
		position: absolute;
		bottom: 32px;
		padding: 0 48px;
		width: 100%;
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: var(--white);
		z-index: 3;
	}

	&:nth-child(2) {
		grid-area: 2 / 1 / 4 / 2;
	}

	&:nth-child(3) {
		grid-area: 1 / 2 / 3 / 3;
	}

	&:nth-child(4) {
		grid-area: 3 / 2 / 4 / 3;
	}

	&:nth-child(5) {
		grid-area: 1 / 3 / 2 / 4;
	}

	&:nth-child(6) {
		grid-area: 2 / 3 / 4 / 4;
	}
`;

export default function GridItem({ image, text }: GridItem) {
	return (
		<GridItemStyled image={image}>
			<p>{text}</p>
		</GridItemStyled>
	);
}
