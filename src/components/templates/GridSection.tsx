import GridItem from '../atoms/GridItem';
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
	display: grid;
	gap: 32px;
	grid-template-columns: repeat(3, 480px);
	grid-template-rows: repeat(3, 300px);
	justify-content: center;

	.first-block {
		height: 300px;
		width: 480px;
		grid-area: 1 / 1 / 2 / 2;
		display: flex;
		flex-direction: column;
		justify-content: center;

		h3 {
			font-style: normal;
			font-weight: 500;
			font-size: 32px;
			line-height: 44px;
			color: var(--primary);
		}
	}
`;

export default function GridSection() {
	return (
		<GridSectionStyled>
			<div className='first-block'>
				<h3>News & Events</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus magna
					justo, lacinia eget consectetur sed convallis at tellus vivamus magna
					justo.
				</p>
				<button>
					<span>View all posts</span>
					<img alt='arrow icon' src='assets/right-arrow.svg' />
				</button>
			</div>
			{gridData.map((el) => (
				<GridItem key={el.id} image={el.image} text={el.text} />
			))}
		</GridSectionStyled>
	);
}
