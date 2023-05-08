import styled from 'styled-components';

const TransparentTitleStyled = styled.h2`
	font-style: normal;
	font-weight: 500;
	font-size: 160px;
	line-height: 188px;
	white-space: nowrap;
	-webkit-text-stroke: 1px rgba(22, 28, 36, 0.1);
	-webkit-text-fill-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	@media (max-width: 1900px) {
		font-size: 80px;
		line-height: 94px;
	}
`;

export default function TransparentTitle({ title }: { title: string }) {
	return (
		<TransparentTitleStyled className='transparent-title'>
			{title}
		</TransparentTitleStyled>
	);
}
