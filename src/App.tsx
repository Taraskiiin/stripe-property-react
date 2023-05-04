import Navigation from './components/organisms/Navigation';
import MainSectionStyled from './components/templates/MainSection';
import Over20YearsSection from './components/templates/Over20YearsSection';
import StatisticSectionStyled from './components/templates/StatisticSection';
import FeedbacksCarousel from './components/templates/FeedbackCarousel';
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
				<StatisticSectionStyled />
				<FeedbacksCarousel />
			</LandingStyled>
			<Navigation />
		</>
	);
}

export default App;
