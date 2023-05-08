import styled from 'styled-components';

const Over20YearsSectionStyled = styled.section`
	width: 100%;
	overflow: hidden;
	text-align: center;
	padding: 120px 0 56px 0;

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 16px;

		span {
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 28px;
			color: var(--secondary);
		}

		.title-numbers {
			font-style: normal;
			font-weight: 500;
			font-size: 80px;
			line-height: 94px;
			color: var(--primary);
		}
	}

	.description-primary {
		font-style: normal;
		font-weight: 500;
		font-size: 32px;
		line-height: 44px;
		color: var(--primary);
		margin: 0 auto 16px;
		max-width: 992px;
	}

	div {
		background-image: url('assets/stripe.svg');
		width: 20px;
		height: 32px;
		position: relative;
		margin: 0 auto 16px;

		&::before,
		&::after {
			content: '';
			width: 220px;
			height: 1px;
			position: absolute;
			top: 50%;
			right: calc(100% + 10px);
			background: rgba(22, 28, 36, 0.1);
		}

		&::after {
			left: calc(100% + 10px);
		}
	}

	.description-secondary {
		max-width: 736px;
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		margin: 0 auto;
		color: var(--secondary);
	}

	@media (max-width: 1900px) {
		padding: 76px 0 76px 0;

		h2 {
			margin-bottom: 16px;

			span {
				line-height: 22px;
			}

			.title-numbers {
				font-size: 40px;
				line-height: 47px;
			}
		}

		.description-primary {
			font-size: 22px;
			max-width: 50%;
			line-height: 36px;
		}

		.description-secondary {
			font-size: 16px;
			line-height: 22px;
			max-width: 50%;
		}
	}

	@media (max-width: 1390px) {
		.description-primary {
			max-width: 80%;
		}

		.description-secondary {
			max-width: 80%;
		}
	}

	@media (max-width: 900px) {
		.description-primary {
			font-size: 16px;
			line-height: 22px;
		}

		.description-secondary {
			font-size: 12px;
			line-height: 18px;
	}
`;

export default function Over20YearsSection() {
	return (
		<Over20YearsSectionStyled>
			<h2>
				<span>Over</span>
				<span className='title-numbers'>20</span>
				<span>Years</span>
			</h2>
			<p className='description-primary'>
				With over two decades industry experience, StripeHomes is the ideal
				choice for homebuilding, residential developments and build to rent
				accommodation.
			</p>
			<div className='stripe-logo' />
			<p className='description-secondary'>
				Passionate about quality and bespoke property developments for first
				time buyers, homeowners & students.
			</p>
		</Over20YearsSectionStyled>
	);
}
