import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutStyled = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	height: 20px;

	img {
		height: 20px;
		width: fit-content;
		fit-object: fill;
	}
`;

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<LogoutStyled
			onClick={() =>
				logout({ logoutParams: { returnTo: window.location.origin } })
			}
		>
			<img alt='log-out icon' src={'assets/icons/logout-icon.svg'} />
		</LogoutStyled>
	);
};

export default LogoutButton;
