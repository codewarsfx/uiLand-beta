import { useContext } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { ScreensContext } from "../../context/screensContex";
import { BrandDescription, BrandLogo, Pill, Screenshot } from "../uiElements";
import { pillsTypes } from "../uiElements/pills";

const ScreensInCategory = () => {
	const {screens,isLoading} = useContext(ScreensContext);

	return (
		<CategorySectionContainer>
			<CategorySectionWrapper>
		{screens?.map(({ startScreens, Name, Category, logo, id }) => (
					<ScreenShotContainer key={id}>
							<Link  to={`/single/${id}`}>
						<ScreenshotContainerTop>
							<BrandLogo imageUrl={logo} />
							<BrandDescription name={Name} category={Category} />
							<Pill type={pillsTypes.screenshot}>view</Pill>
						</ScreenshotContainerTop>
						<ScreenshotContainerBottom>
							{startScreens.map((screenshot) => (
								<Screenshot key={screenshot} imgLink={screenshot} alt={Name} />
							))}
						</ScreenshotContainerBottom>
					</Link></ScreenShotContainer>
				))}
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
	flex-wrap: wrap;
	margin: auto;
	gap: 2em;
	width: 90%;
	max-width: 1250px;
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
		min-height: 100%;
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
	gap:1rem;
	justify-content: space-between;
`;

export default ScreensInCategory;
