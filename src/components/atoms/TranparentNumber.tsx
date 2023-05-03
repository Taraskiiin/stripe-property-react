import styled from 'styled-components';

interface ITransparentNumberStyled {
	isActive: boolean;
}

const TransparentNumberStyled = styled.div<ITransparentNumberStyled>`
	font-weight: 500;
	font-size: 120px;
	line-height: 141px;
	-webkit-text-stroke: 1px #fff;
	-webkit-text-fill-color: transparent;
	opacity: ${(props) => (props.isActive ? '1' : '0.2')};
`;

export default function TransparentNumber({
	label,
	isActive,
}: {
	label: string;
	isActive: boolean;
}) {
	return (
		<TransparentNumberStyled isActive={isActive}>
			{label}
		</TransparentNumberStyled>
	);
}
