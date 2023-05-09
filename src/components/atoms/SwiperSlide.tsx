import styled from 'styled-components';

interface SwiperSlide {
	feedbackBody: string;
	author: string;
	position: string;
	photo: string;
}

const SwiperSlideStyled = styled.div`
	max-width: 50%;
	padding-left: 128px;
	margin: 0 auto;
	position: relative;

	&::before {
		content: '';
		width: 88px;
		height: 72px;
		background-image: url('assets/color-image.svg');
		position: absolute;
		left: 0;
		top: 5px;
	}

	.feedback-body {
		max-width: 864px;
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 32px;
		color: var(--primary);
		margin-bottom: 32px;
	}

	.author-block {
		display: inline-grid;
		grid-template-columns: 56px 1fr;
		grid-gap: 0 16px;

		img {
			width: 56px;
			height: 56px;
			object-fit: cover;
			border-radius: 150%;
			grid-column: 1 / 2;
			grid-row: 1 / 3;
		}

		.author {
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 28px;
			color: var(--primary);
		}

		.position {
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
			color: var(--secondary);
		}
	}

	@media (max-width: 1900px) {
		max-width: 70%;
		padding-left: 0;

		.feedback-body {
			max-width: 100%;
			font-size: 16px;
			line-height: 22px;
		}

		&::before {
			display: none;
		}
	}
`;

export default function SwiperSlide({
	feedbackBody,
	author,
	position,
	photo,
}: SwiperSlide) {
	return (
		<SwiperSlideStyled>
			<p className='feedback-body'>{feedbackBody}</p>
			<div className='author-block'>
				<img alt='author-photo' src={photo} />
				<p className='author'>{author}</p>
				<p className='position'>{position}</p>
			</div>
		</SwiperSlideStyled>
	);
}
