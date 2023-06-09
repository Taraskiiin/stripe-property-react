import TransparentNumber from '../atoms/TranparentNumber';
import Button from '../atoms/Button';
import styled from 'styled-components';

interface NumberBlock {
	label: string;
	title: string;
	description: string;
	isActive: boolean;
}

interface NumberBlockStyled {
	isActive: boolean;
}

const NumberBlockStyled = styled.div<NumberBlockStyled>`
	width: 100%;
	padding-bottom: 48px;
	padding-left: 64px;
	cursor: pointer;
	max-height: fit-content;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		min-height: 100vh;
		width: 1px;
		bottom: 0;
		right: 0;
		background-color: var(--white);
		opacity: 0.2;
	}

	h3 {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 32px;
		color: #ffffff;
	}

	.hidden-part {
		display: ${(props) => (props.isActive ? 'block' : 'none')};

		p {
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 28px;
			color: #ffffff;
			margin-bottom: 24px;
		}
	}
`;

export default function NumberBlock({
	label,
	title,
	description,
	isActive,
}: NumberBlock) {
	return (
		<NumberBlockStyled isActive={isActive}>
			<TransparentNumber label={label} isActive={isActive} />
			<h3>{title}</h3>
			<div className='hidden-part'>
				<p>{description}</p>
				<Button label='Know more' isBlue={true} click={() => console.log(1)} />
			</div>
		</NumberBlockStyled>
	);
}
