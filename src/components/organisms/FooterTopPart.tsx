import styled from 'styled-components';

const FooterTopPartStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	img {
		width: 64px;
		height: 64px;
		margin: 0 auto;
		padding: 8px;
	}

	h3 {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 32px;
		text-align: center;
		color: var(--white);
	}

	p {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		text-align: center;
		color: var(--secondaryLight);
	}

	label {
		position: relative;
		width: 30%;
		margin: 0 auto;
		height: 20px;
		padding: 0;
		cursor: pointer;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 24px;
			height: 24px;
			background-image: url('assets/icons/edit-icon.svg');
			background-repeat: no-repeat;
			background-position: center;
		}

		input {
			width: 100%;
			border: none;
			padding: 0;
			background-color: transparent;
			color: var(--white);
			font-size: 16px;
			line-height: 28px;
			padding-bottom: 16px;
			border-bottom: 1px solid var(--white);

			&:focus {
				outline: none;
			}

			&::placeholder {
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 28px;
				color: var(--secondary);
			}
		}
	}

	@media (max-width: 1200px) {
		gap: 8px;

		img {
			width: 40px;
			height: 40px;
			padding: 4px;
		}

		h3 {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 12px;
		}

		p {
			font-size: 14px;
			line-height: 18px;
		}

		label {
			margin-top: 10px;
			max-width: 200px;

			input {
				font-size: 14px;
				line-height: 18px;

				&::placeholder {
					font-size: 14px;
					line-height: 18px;
				}
			}
		}
	}

	@media (max-width: 678px) {
		label {
			width: 80%;
		}
	}
`;

export default function FooterTopPart() {
	return (
		<FooterTopPartStyled>
			<img alt='email-icon' src='assets/icons/email-icon.svg' />
			<h3>Newsletter subscribe</h3>
			<p>Subscribe to our newsletter, we promise not to spam!</p>
			<label>
				<input type='email' placeholder='Your email address' />
			</label>
		</FooterTopPartStyled>
	);
}
