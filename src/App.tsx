import Navigation from './components/organisms/Navigation';
import FeaturedDevelopments from './components/templates/FeaturedDevelopments';
import MainSectionStyled from './components/templates/MainSection';
import Over20YearsSection from './components/templates/Over20YearsSection';
import StatisticSectionStyled from './components/templates/StatisticSection';
import FeedbacksCarousel from './components/templates/FeedbackCarousel';
import GridSection from './components/templates/GridSection';
import Footer from './components/templates/Footer';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const LandingStyled = styled.div`
	width: calc(100vw - 80px);
	overflow: hidden;

	@media (max-width: 768px) {
		width: calc(100vw - 50px);
	}
`;

function App() {
	const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		<>
			{isAuthenticated ? (
				<>
					<LandingStyled>
						<MainSectionStyled />
						<Over20YearsSection />
						<FeaturedDevelopments />
						<StatisticSectionStyled />
						<FeedbacksCarousel />
						<GridSection />
						<Footer />
					</LandingStyled>
					<Navigation />
				</>
			) : (
				<button onClick={() => loginWithRedirect()}>Log In</button>
			)}
		</>
	);
}

export default App;
