import styled from 'styled-components';

interface BurgerButton {
	click: () => void;
}

const BurgerButtonButton = styled.button`
	cursor: pointer;
	border: none;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--white);
`;

export default function BurgerButton({ click }: BurgerButton) {
	return (
		<BurgerButtonButton onClick={click}>
			<img alt='burger-menu icon' src='assets/icons/burger-icon.svg' />
		</BurgerButtonButton>
	);
}
