import Logo from '../atoms/Logo';
import SocialMediaLink from '../atoms/SocialMediaLink';
import styled from 'styled-components';

const linksList = [
	{ id: '1', label: 'About us', href: '#' },
	{ id: '2', label: 'Our locations', href: '#' },
	{ id: '3', label: 'Statement', href: '#' },
	{ id: '4', label: 'Reviews', href: '#' },
	{ id: '5', label: 'News', href: '#' },
];

const socialMedias = [
	{ id: '1', href: '#', srcIcon: 'assets/icons/facebook-icon.svg' },
	{ id: '2', href: '#', srcIcon: 'assets/icons/twitter-icon.svg' },
	{ id: '3', href: '#', srcIcon: 'assets/icons/instagram-icon.svg' },
];

const FooterMiddlePartStyled = styled.div`
	display: grid;
	gap: 32px;
	grid-template-columns: repeat(4, 352px);
	justify-content: center;

	& > div > h3 {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 32px;
		color: var(--white);
		margin-bottom: 24px;
	}

	.contacts-column {
		.contacts-body {
			display: flex;
			flex-direction: column;
			gap: 24px;

			.address,
			.email {
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 28px;
				color: var(--secondaryLight);
			}

			.phones {
				a {
					text-decoration: none;
					font-style: normal;
					font-weight: 500;
					font-size: 20px;
					line-height: 28px;
					color: var(--white);
					display: block;
				}
			}
		}
	}

	.links-column {
		div {
			display: flex;
			flex-direction: column;
			gap: 8px;

			a {
				text-decoration: none;
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 28px;
				color: var(--secondaryLight);
			}
		}
	}

	.social-column {
		div {
			display: flex;
			gap: 8px;
		}
	}

	@media (max-width: 1900px) {
		grid-template-columns: repeat(4, 1fr);
		justify-items: center;
	}

	@media (max-width: 1390px) {
		grid-template-columns: repeat(3, 1fr);
		position: relative;

		.social-column {
			position: absolute;
			bottom: 0;
			left: 10%;
		}
	}

	@media (max-width: 1200px) {
		display: flex;

		& > div > h3 {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 12px;
		}

		.contacts-column {
			.contacts-body {
				.phones {
					a {
						font-size: 14px;
						line-height: 18px;
					}
				}
			}
		}

		.social-column {
			position: static;
		}
	}

	@media (max-width: 860px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

export default function FooterMiddlePart() {
	return (
		<FooterMiddlePartStyled>
			<Logo />
			<div className='contacts-column'>
				<h3>Contacts</h3>
				<div className='contacts-body'>
					<div className='address'>
						<p>First Floor, Forth Banks,</p>
						<p>Newcastle, NE1 3PA United Kingdom</p>
					</div>
					<a className='email' href='#'>
						info@stripehomes.co.uk
					</a>
					<div className='phones'>
						<a href='tel:01912499292'>Newcastle: 0191 249 9292</a>
						<a href='tel:01217162556'>Birmingham: 0121 716 2556</a>
					</div>
				</div>
			</div>
			<div className='links-column'>
				<h3>Links</h3>
				<div>
					{linksList.map((el) => (
						<a key={el.id} href={el.href}>
							{el.label}
						</a>
					))}
				</div>
			</div>
			<div className='social-column'>
				<h3>Social</h3>
				<div>
					{socialMedias.map((el) => (
						<SocialMediaLink
							key={el.id}
							href={el.href}
							srcIcon={el.srcIcon}
							isFooter={true}
						/>
					))}
				</div>
			</div>
		</FooterMiddlePartStyled>
	);
}
