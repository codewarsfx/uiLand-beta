import styled from "styled-components";

const Screenshot = () => {
	return (
		<>
			<ScreenshotContainer />
		</>
	);
};



const ScreenshotContainer = styled.div`
	width: 48%;
	border-radius: 0.8em;
	height: 40vh;
	background-color: var(--light-grey-color);

	@media (min-width: 768px) {
		height: 60vh;
		border-radius: 1.8em;
	}
`;

export default Screenshot;
