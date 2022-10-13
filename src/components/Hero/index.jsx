import styled from "styled-components";

import Header from "../Header";
import HeroImgBig from "../HeroImgBig";
import HeroImgSmall from "../HeroImgSmall";
import HeroText from "../HeroText";

const Hero = () => {
	return (
		<HeroContainer>
			<Header />
			<HeroText />
			<HeroImgBig />
			<HeroImgSmall />
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
