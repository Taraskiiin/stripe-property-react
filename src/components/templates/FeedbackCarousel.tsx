import CustomSwiperSlide from '../atoms/SwiperSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styled from 'styled-components';

const carouselList = [
	{
		id: '1',
		feedbackBody:
			'Sed porttitor lectus nibh curabitur aliquet quam id dui posuere blandit quisque velit nisi, pretium cinia in, elementum id enim. Nulla quis lorem libero malesuada feugiat sed porttitor lectus nibh.',
		author: 'Dennis L. Brick',
		position: 'Attorney',
		photo: 'assets/man.jpg',
	},
	{
		id: '2',
		feedbackBody:
			'Sed porttitor lectus nibh curabitur aliquet quam id dui posuere blandit quisque velit nisi, pretium cinia in, elementum id enim. Nulla quis lorem libero malesuada feugiat sed porttitor lectus nibh.',
		author: 'Dennis L. Brick',
		position: 'Attorney',
		photo: 'assets/man.jpg',
	},
];

const FeedbacksCarouselStyled = styled.section`
	padding: 160px 0 116px 0;
	width: 100%;
	background-color: #f3f3f5;

	.swiper {
		& > .swiper-button-prev,
		& > .swiper-button-next {
			right: 296px;

			&::after {
				content: '' !important;
				position: absolute;
				z-index: 10;
				width: 64px;
				height: 29px;
				background-image: url('assets/icons/next-button-icon.svg');
			}
		}

		& > .swiper-button-prev {
			left: 296px;

			&::after {
				background-image: url('assets/icons/prev-button-icon.svg');
			}
		}
	}
`;

export default function FeedbacksCarousel() {
	return (
		<FeedbacksCarouselStyled>
			<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
				{carouselList.map((el) => (
					<SwiperSlide key={el.id}>
						<CustomSwiperSlide
							feedbackBody={el.feedbackBody}
							author={el.author}
							position={el.position}
							photo={el.photo}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</FeedbacksCarouselStyled>
	);
}
