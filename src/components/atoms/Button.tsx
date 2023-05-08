import styled from 'styled-components';

interface Button {
	label: string;
	borderColor?: string;
	isBlue?: boolean;
	click: () => void;
}

interface ButtonStyled {
	borderColor?: string;
	isBlue: boolean;
}

const ButtonStyled = styled.button<ButtonStyled>`
	cursor: pointer;
	border: ${(props) =>
		props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
	padding: 10px 32px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 28px;
	color: ${(props) => (props.isBlue ? 'var(--white)' : 'var(--primary)')};
	background-color: ${(props) =>
		props.isBlue ? 'var(--blueLight)' : 'transparent'};
	border-radius: 4px;
	width: fit-content;

	@media (max-width: 1025px) {
			padding: 5px 16px;
			font-size: 14px;
			line-height: 18px;
			white-space: nowrap; 
			
`;

export default function Button({
	label,
	borderColor,
	isBlue = false,
	click,
}: Button) {
	return (
		<ButtonStyled borderColor={borderColor} isBlue={isBlue} onClick={click}>
			{label}
		</ButtonStyled>
	);
}
