import TransparentTitle from '../atoms/TransparentTitle';
import FeaturedDevelopmentsItem from '../molecules/FeaturedDevelopmentsItem';
import styled from 'styled-components';

const gridData = [
	{
		id: '1',
		image: 'assets/featured-developments/1.png',
		title: "25 St Paul's",
		bodyText:
			'A luxury & exclusive development with four two bed apartments each with its own dedicated floor located in Birmingham historic Georgian square in the Jewellery Quarter.',
		buttonLabel: 'Register your interest',
		borderButtonColor: '#4EC0A5',
	},
	{
		id: '2',
		image: 'assets/featured-developments/2.png',
		title: 'City Centre Apart-Hotel',
		bodyText:
			'Coming soon. Luxury apart-hotel perfectly located in Newcastle city centre to work and play.',
		buttonLabel: 'Register your interest',
		borderButtonColor: '#40C7F4',
		textFirst: true,
	},
	{
		id: '3',
		image: 'assets/featured-developments/3.png',
		title: '5 Cross Street',
		bodyText:
			'A luxury boutique developement with 12 one bed apartments and the lifestyle to match in the heart of Newcastle.',
		buttonLabel: 'Register your interest',
		borderButtonColor: '#F16A82',
	},
	{
		id: '4',
		image: 'assets/featured-developments/4.png',
		title: 'Quayside View Studios',
		bodyText:
			'A luxury student development of 118 studio and one bed apartments, perfectly located in the heart of Newcastle.',
		buttonLabel: 'Find out more',
		borderButtonColor: '#F89F28',
		textFirst: true,
	},
];

const FeaturedDevelopmentsStyled = styled.section`
	width: 100%;
	padding: 104px 0 79px 0;
	position: relative;

	.transparent-title {
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -5%);
		z-index: -1;

		&:last-child {
			top: calc(96% - 20px);
		}
	}

	.grid {
		z-index: 10;
		width: 100%;
		display: grid;
		justify-content: start;
		justify-items: start;
		gap: 120px;
		grid-template-areas:
			'. . . . . a a a'
			'b b b b b a a a'
			'b b b b b . . .'
			'. . . . c c c c'
			'. d d d c c c c'
			'. d d d . . . .';
	}
`;

export default function FeaturedDevelopments() {
	return (
		<FeaturedDevelopmentsStyled>
			<TransparentTitle title='Featured developments' />
			<div className='grid'>
				{gridData.map((el) => (
					<FeaturedDevelopmentsItem
						key={el.id}
						image={el.image}
						title={el.title}
						bodyText={el.bodyText}
						buttonLabel={el.buttonLabel}
						borderButtonColor={el.borderButtonColor}
						textFirst={el.textFirst}
					/>
				))}
			</div>
			<TransparentTitle title='Featured developments' />
		</FeaturedDevelopmentsStyled>
	);
}
