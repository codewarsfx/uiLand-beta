import styled from "styled-components";

import Header from "../Header/headerComponent";
import HeroText from "../HeroText/herotextComponent";


const Hero = () => {
	return (
		<HeroContainer>
            <Header />
            <HeroText />
		</HeroContainer>
	);
};

const HeroContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: var(--primary-color);
	overflow: hidden;
	position: relative;
`;

export default Hero;
