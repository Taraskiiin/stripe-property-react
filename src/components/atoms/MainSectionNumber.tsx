import styled from 'styled-components';

interface MainSectionNumberStyled {
	isActive?: boolean;
}

const MainSectionNumberStyled = styled.div<MainSectionNumberStyled>`
	font-weight: 500;
	font-size: 120px;
	line-height: 141px;
	-webkit-text-stroke: 1px #fff;
	-webkit-text-fill-color: transparent;
	opacity: ${(props) => (props.isActive ? '1' : '0.2')};
`;

export default function MainSectionNumber({
	labels,
	isActive,
}: {
	labels: string;
	isActive?: boolean;
}) {
	return (
		<MainSectionNumberStyled isActive={isActive}>
			{labels}
		</MainSectionNumberStyled>
	);
}
