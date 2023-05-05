import Button from '../atoms/Button';
import styled from 'styled-components';

interface FeaturedDevelopmentsItem {
	image: string;
	title: string;
	bodyText: string;
	buttonLabel: string;
	borderButtonColor: string;
	textFirst?: boolean;
}

const FeaturedDevelopmentsItemStyled = styled.div<{ textFirst?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: fit-content;
	gap: 64px;

	img {
		height: 800px;
		object-fit: contain;
		order: ${(props) => (props.textFirst ? '1' : '0')};
	}

	.block-body {
		display: flex;
		flex-direction: column;
		gap: 28px;
		max-width: 624px;

		h3 {
			font-style: normal;
			font-weight: 500;
			font-size: 48px;
			line-height: 64px;
			color: var(--primary);
		}

		p {
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 28px;
			color: var(--secondary);
		}
	}

	&:nth-child(1) {
		grid-area: a;
	}

	&:nth-child(2) {
		grid-area: b;
		align-items: center;
	}

	&:nth-child(3) {
		grid-area: c;
	}

	&:nth-child(4) {
		grid-area: d;
	}
`;

export default function FeaturedDevelopmentsItem({
	image,
	title,
	bodyText,
	buttonLabel,
	borderButtonColor,
	textFirst,
}: FeaturedDevelopmentsItem) {
	return (
		<FeaturedDevelopmentsItemStyled textFirst={textFirst}>
			<img src={image} alt={title} />
			<div className='block-body'>
				<h3>{title}</h3>
				<p>{bodyText}</p>
				<Button
					label={buttonLabel}
					borderColor={borderButtonColor}
					click={() => console.log(title)}
				/>
			</div>
		</FeaturedDevelopmentsItemStyled>
	);
}
