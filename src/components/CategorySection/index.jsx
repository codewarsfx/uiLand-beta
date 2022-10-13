import styled from "styled-components";

import { BrandDescription, BrandLogo, Pill, Screenshot } from "../uiElements";
import { pillsTypes } from "../uiElements/pills";

const ScreensInCategory = () => {
	return (
		<CategorySectionContainer>
			<CategorySectionWrapper>
				<ScreenShotContainer>
					<ScreenshotContainerTop>
						<BrandLogo imageUrl='/assets/img/cowrywise.png' />
						<BrandDescription name='Cowrywise' category='FINTECH' />
						<Pill type={pillsTypes.screenshot}>FINTECH</Pill>
					</ScreenshotContainerTop>
					<ScreenshotContainerBottom>
						<Screenshot />
						<Screenshot />
					</ScreenshotContainerBottom>
				</ScreenShotContainer>
			</CategorySectionWrapper>
		</CategorySectionContainer>
	);
};

const CategorySectionContainer = styled.div`
	margin: 1.5em 0;

	@media (min-width: 768px) {
		margin: 3em 0;
	}
`;

const CategorySectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: auto;
	width: 90%;

	:not(:first-child) {
		margin-top: 4em;
	}
	@media (min-width: 768px) {
		flex-direction: row;

		width: 95%;
	}
`;

const ScreenShotContainer = styled.div`
	margin-top: 2em;

	@media (min-width: 768px) {
		width: 45%;
		margin-top: 0;
	}
`;

const ScreenshotContainerTop = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1em;
`;

const ScreenshotContainerBottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default ScreensInCategory;
