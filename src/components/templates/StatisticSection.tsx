import StatisticItem from '../atoms/StatisticItem';
import styled from 'styled-components';

const statisticData = [
	{
		id: '1',
		icon: 'assets/icons/crane-icon.svg',
		value: '230',
		position: 'Units under construction',
	},
	{
		id: '2',
		icon: 'assets/icons/buildings-icon.svg',
		value: '500+',
		position: 'Units delivered',
	},
	{
		id: '3',
		icon: 'assets/icons/star-icon.svg',
		value: '20+',
		position: 'Years experience',
	},
	{
		id: '4',
		icon: 'assets/icons/coin-icon.svg',
		value: '£41m',
		position: 'Gross development value',
	},
];

const StatisticSectionStyled = styled.div`
	padding: 81px 0 160px 0;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 352px);
	grid-gap: 32px;
	justify-content: center;
	justify-items: center;
	align-items: center;
`;

export default function StatisticSection() {
	return (
		<StatisticSectionStyled>
			{statisticData.map((el) => (
				<StatisticItem
					key={el.id}
					icon={el.icon}
					value={el.value}
					position={el.position}
				/>
			))}
		</StatisticSectionStyled>
	);
}
