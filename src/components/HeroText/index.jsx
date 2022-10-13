import styled from "styled-components";

import { Button } from "../uiElements";
import { buttonTypes } from "../uiElements/button";

const HeroText = () => {
return(	<HeroTextContainer>
		<HeroTextTagLine>
			Get inspired by UI designs from world class Apps
		</HeroTextTagLine>
		<HeroTextSecondary>
			Save hours of UI & UX research with our library of mobile screenshots
		</HeroTextSecondary>
		<Button type={buttonTypes.primary}>Try it free</Button>
	</HeroTextContainer>)
};

const HeroTextContainer = styled.main`
	display: flex;
	width: 90%;
	margin: auto;
	flex-direction: column;
	align-items: center;
	color: var(--text-color-light);
	margin-top: 10vh;

	@media (min-width: 768px) {
		width: 910px;
	}
`;

const HeroTextTagLine = styled.h1`
	font-size: 24px;
	line-height: 1.2;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 48px;
		width: 80%;
	}
`;

const HeroTextSecondary = styled.p`
	font-size: 16px;
	font-weight: 400;
	margin: 3em 1em;
	line-height: 1.2;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 28px;
		margin: 1em 0;
	}
`;

export default HeroText;
