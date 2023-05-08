import BurgerButton from '../atoms/BurgerButton';
import SocialMediaLink from '../atoms/SocialMediaLink';
import styled from 'styled-components';
import LogoutButton from '../atoms/LogoutButton';
import { useState } from 'react';

const socialMediaNav = [
	{ id: '1', href: '#', srcIcon: 'assets/icons/facebook-icon.svg' },
	{ id: '2', href: '#', srcIcon: 'assets/icons/twitter-icon.svg' },
	{ id: '3', href: '#', srcIcon: 'assets/icons/instagram-icon.svg' },
];

const NavigationStyled = styled.div`
	position: fixed;
	z-index: 100;
	top: 0;
	right: 0;
	width: 80px;
	height: 100vh;
	background-color: var(--white);
	align-content: space-between;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 32px 0 32px 0;

	nav {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	@media (max-width: 768px) {
		width: 50px;
	}
`;

export default function Navigation() {
	const [openBurger, setOpenBurger] = useState<boolean>(false);

	const handleToggleBurgerMenu = () => {
		setOpenBurger(!openBurger);
	};

	return (
		<NavigationStyled>
			<BurgerButton click={handleToggleBurgerMenu} />
			<nav>
				{socialMediaNav.map((el) => (
					<SocialMediaLink key={el.id} href={el.href} srcIcon={el.srcIcon} />
				))}
			</nav>
			<LogoutButton />
		</NavigationStyled>
	);
}
