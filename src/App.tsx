import Navigation from './components/organisms/Navigation';
import FeaturedDevelopments from './components/templates/FeaturedDevelopments';
import MainSectionStyled from './components/templates/MainSection';
import Over20YearsSection from './components/templates/Over20YearsSection';
import StatisticSectionStyled from './components/templates/StatisticSection';
import FeedbacksCarousel from './components/templates/FeedbackCarousel';
import GridSection from './components/templates/GridSection';
import Footer from './components/templates/Footer';
import styled from 'styled-components';

const LandingStyled = styled.div`
	width: calc(100vw - 80px);
	overflow: hidden;
`;

function App() {
	return (
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
	);
}

export default App;
