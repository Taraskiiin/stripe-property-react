import GridItem from '../atoms/GridItem';
import TransparentTitle from '../atoms/TransparentTitle';
import styled from 'styled-components';

const gridData = [
	{
		id: '1',
		image: 'assets/grid-photos/1.jpeg',
		text: 'Win VIP Tickets to Newcastle vs Leicester',
	},
	{
		id: '2',
		image: 'assets/grid-photos/2.jpeg',
		text: 'Newcastle bids to become climate-neutral & smart city',
	},
	{
		id: '3',
		image: 'assets/grid-photos/3.jpeg',
		text: 'The inside guide to Newcastle, the North East’s cultural powerhouse',
	},
	{
		id: '4',
		image: 'assets/grid-photos/4.jpeg',
		text: '£2,000 raised for Smile for Life Children’s Charity',
	},
	{
		id: '5',
		image: 'assets/grid-photos/5.jpeg',
		text: 'Birmingham climbs PwC’s Europe real estate table',
	},
];

const GridSectionStyled = styled.section`
	padding: 160px 0;
	position: relative;

	.transparent-title {
		position: absolute;
		left: 50%;
		top: 5%;
		transform: translate(-50%, -5%);
		z-index: 0;
	}

	.grid {
		display: grid;
		gap: 32px;
		grid-template-columns: repeat(3, 480px);
		grid-template-rows: repeat(3, 300px);
		justify-content: center;
		position: relative;
		z-index: 3;

		.first-block {
			height: 300px;
			width: 480px;
			padding: 0 48px;
			grid-area: 1 / 1 / 2 / 2;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 20px;
			border: 1px solid rgba(22, 28, 36, 0.1);
			border-radius: 4px;
			background-color: var(--white);

			h3 {
				font-style: normal;
				font-weight: 500;
				font-size: 32px;
				line-height: 44px;
				color: var(--primary);
			}

			p {
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 28px;
				color: var(--secondary);
			}

			button {
				cursor: pointer;
				border: none;
				background: transparent;
				width: fit-content;
				font-style: normal;
				font-weight: 600;
				font-size: 16px;
				line-height: 28px;
				color: var(--primary);
				display: flex;
				align-items: center;
				gap: 6px;
			}
		}
	}

	@media (max-width: 1900px) {
		padding: 80px 0;

		.grid {
			display: grid;
			gap: 17px;
			grid-template-columns: repeat(3, 240px);
			grid-template-rows: repeat(3, 150px);

			.first-block {
				height: 150px;
				width: 240px;
				padding: 0 10px;
				gap: 5px;

				h3 {
					font-size: 18px;
					line-height: 22px;
				}

				p {
					font-size: 12px;
					line-height: 16px;
				}
			}
		}

		@media (max-width: 842px) {
			.transparent-title {
				display: none;
			}

			.grid {
				grid-template-columns: repeat(2, 240px);
				grid-template-rows: repeat(5, 150px);
			}
		}
	}

	@media (max-width: 590px) {
		.grid {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(6, 1fr);

			.first-block {
				height: min-content;
				padding: 10px;
				width: calc(100% - 20px);
				margin: 0 auto;
			}
		}
	}
`;

export default function GridSection() {
	return (
		<GridSectionStyled>
			<TransparentTitle title='News & Events' />
			<div className='grid'>
				<div className='first-block'>
					<h3>News & Events</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus
						magna justo, lacinia eget consectetur sed convallis at tellus
						vivamus magna justo.
					</p>
					<button>
						<span>View all posts</span>
						<img alt='arrow icon' src='assets/right-arrow.svg' />
					</button>
				</div>
				{gridData.map((el) => (
					<GridItem key={el.id} image={el.image} text={el.text} />
				))}
			</div>
		</GridSectionStyled>
	);
}
