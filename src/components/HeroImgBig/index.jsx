import styled from "styled-components";

const HeroImgBig = () => {
	return (
		<HeroImgBigContainer>
			<HeroImageLeft>
				<img src='/assets/img/iphone.png' alt='hero-iphone' />
			</HeroImageLeft>
			<HeroImageCenter>
				<img src='/assets/img/iphone.png' alt='hero-iphone' />
			</HeroImageCenter>
			<HeroImageRight>
				<img src='/assets/img/iphone.png' alt='hero-iphone' />
			</HeroImageRight>
		</HeroImgBigContainer>
	);
};

const HeroImgBigContainer = styled.section`
	display: none;
	

	@media (min-width: 768px) {
		display: block;
		margin: 7vh auto;
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
	transform: translateX(-50%);
`;

const HeroImageLeft = styled(HeroImage)`
	top: 16%;
`;

const HeroImageRight = styled(HeroImage)`
	right: 0;
	top: 16%;
`;

export default HeroImgBig;
