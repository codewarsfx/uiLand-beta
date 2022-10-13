import styled from "styled-components";

const HeroImgBig = () => {
	return (
		<HeroImgBigContainer>
			<HeroImageLeft>
				<img src='/assets/img/batter3.svg' alt='hero-iphone' />
			</HeroImageLeft>
			<HeroImageCenter>
				<img src='/assets/img/cowrywisesvg.svg' alt='hero-iphone' />
			</HeroImageCenter>
			<HeroImageRight>
				<img src='/assets/img/flex.svg' alt='hero-iphone' />
			</HeroImageRight>
		</HeroImgBigContainer>
	);
};

const HeroImgBigContainer = styled.section`
	display: none;

	@media (min-width: 768px) {
		display: block;
		margin: 4vh auto;
		position: relative;
		height: 50vh;
		width: 85%;
	}
`;

const HeroImage = styled.div`
	position: absolute;
`;

const HeroImageCenter = styled(HeroImage)`
	left: 50%;
	transform: translateX(-50%) scale(0.9);
`;

const HeroImageLeft = styled(HeroImage)`
	top: 18%;
`;

const HeroImageRight = styled(HeroImage)`
	right: 0;
	top: 18%;
`;

export default HeroImgBig;
