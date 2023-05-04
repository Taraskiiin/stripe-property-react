import styled from 'styled-components';

interface StatisticItem {
	icon: string;
	value: string;
	position: string;
}

const StatisticItemStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 1px;
		height: 100%;
		background-color: rgba(22, 28, 36, 0.1);
		bottom: 0;
		right: 0;
	}

	&:last-child {
		&::after {
			display: none;
		}
	}

	h3 {
		font-style: normal;
		font-weight: 500;
		font-size: 56px;
		line-height: 72px;
		color: var(--primary);
		margin-top: 8px;
	}

	p {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
		color: var(--secondaryLight);
	}
`;

export default function StatisticItem({
	icon,
	value,
	position,
}: StatisticItem) {
	return (
		<StatisticItemStyled>
			<img alt='item-thematic-icon' src={icon} />
			<h3>{value}</h3>
			<p>{position}</p>
		</StatisticItemStyled>
	);
}
