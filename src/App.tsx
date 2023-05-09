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
import { useEffect } from 'react';

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

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		!isAuthenticated && loginWithRedirect();
	}, []);

	return (
		<>
			{isAuthenticated && (
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
			)}
		</>
	);
}

export default App;
