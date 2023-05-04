import styled from 'styled-components';

interface SocialMediaLink {
	href: string;
	srcIcon: string;
}

const SocialMediaLinkStyled = styled.a`
	text-decoration: none;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid rgba(22, 28, 36, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-height: 16px;
		object-fit: contain;
	}
`;

export default function SocialMediaLink({ href, srcIcon }: SocialMediaLink) {
	return (
		<SocialMediaLinkStyled href={href}>
			<img alt='social-media icon' src={srcIcon} />
		</SocialMediaLinkStyled>
	);
}
