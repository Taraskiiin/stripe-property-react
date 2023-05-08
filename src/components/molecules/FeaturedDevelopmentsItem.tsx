import Button from '../atoms/Button';
import useIsMobile from '../../hooks/useLogos';
import styled from 'styled-components';

interface FeaturedDevelopmentsItem {
	image: string;
	title: string;
	bodyText: string;
	buttonLabel: string;
	borderButtonColor: string;
	textFirst?: boolean;
	logo: string;
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

	@media (max-width: 1900px) {
		gap: 32px;

		img {
			height: 600px;
			object-fit: contain;
			order: 0;
		}

		.block-body {
			gap: 14px;
			max-width: 468px;

			h3 {
				font-size: 24px;
				line-height: 32px;
				color: var(--primary);
			}

			p {
				font-size: 18px;
				line-height: 22px;
				color: var(--secondary);
			}
		}

		&:nth-child(2) {
			align-items: end;
		}

		&:nth-child(3) {
			min-width: 774px;

			img {
				width: 100%;
				object-fit: cover;
			}
		}
	}

	@media (max-width: 1390px) {
		width: 100%;
		align-items: center;
		gap: 14px;

		img {
			height: fit-content;
		}

		.block-body {
			align-items: center;
			max-width: 80%;
			text-align: center;

			h3 {
				color: var(--white);
			}

			button {
				color: var(--white);
			}
		}
	}
`;

export default function FeaturedDevelopmentsItem({
	image,
	title,
	bodyText,
	buttonLabel,
	borderButtonColor,
	textFirst,
	logo,
}: FeaturedDevelopmentsItem) {
	const isMobile = useIsMobile();
	return (
		<FeaturedDevelopmentsItemStyled textFirst={textFirst}>
			<img src={isMobile ? logo : image} alt={title} />
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
