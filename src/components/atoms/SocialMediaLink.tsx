import styled from 'styled-components';

interface SocialMediaLink {
	href: string;
	srcIcon: string;
	isFooter?: boolean;
}

const SocialMediaLinkStyled = styled.a<{ isFooter?: boolean }>`
	text-decoration: none;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: ${(props) =>
		props.isFooter
			? ' 1px solid rgba(255, 255, 255, 0.1)'
			: '1px solid rgba(22, 28, 36, 0.1)'};
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-height: 16px;
		object-fit: contain;
	}
`;

export default function SocialMediaLink({
	href,
	srcIcon,
	isFooter,
}: SocialMediaLink) {
	return (
		<SocialMediaLinkStyled href={href} isFooter={isFooter}>
			<img alt='social-media icon' src={srcIcon} />
		</SocialMediaLinkStyled>
	);
}
