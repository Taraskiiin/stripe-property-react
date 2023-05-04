import NumberBlock from '../molecules/NumberBlock';
import styled from 'styled-components';
import { useState } from 'react';

const numberBlocksData = [
	{
		id: '1',
		label: '01',
		title: 'Homes',
		description: 'Pellentesque in ipsum orci porta',
	},
	{
		id: '2',
		label: '02',
		title: 'Commercial',
		description: 'Pellentesque in ipsum orci porta',
	},
	{
		id: '3',
		label: '03',
		title: 'Students',
		description: 'Pellentesque in ipsum orci porta',
	},
	{
		id: '4',
		label: '04',
		title: 'Digital',
		description: 'Pellentesque in ipsum orci porta',
	},
];

const NumberBlocksStyled = styled.div`
	min-width: calc(100% - 80px);
	position: absolute;
	bottom: 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	align-items: end;
`;

export default function NumberBlocks() {
	const [selectedId, setSelectedId] = useState<string>('1');

	return (
		<NumberBlocksStyled>
			{numberBlocksData.map((el) => (
				<div onClick={() => setSelectedId(el.id)} key={el.id}>
					<NumberBlock
						label={el.label}
						title={el.title}
						description={el.description}
						isActive={el.id === selectedId}
					/>
				</div>
			))}
		</NumberBlocksStyled>
	);
}
