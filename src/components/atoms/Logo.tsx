import styled from 'styled-components';

const LogoStyled = styled.div`
	cursor: pointer;
	text-decoration: none;
`;

export default function Logo() {
	return (
		<LogoStyled className='logo-block'>
			<a href='#'>
				<img alt='logo' src='assets/icons/logo.svg' />
			</a>
		</LogoStyled>
	);
}
