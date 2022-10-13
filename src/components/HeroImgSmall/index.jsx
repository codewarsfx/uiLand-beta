import styled from "styled-components";

const HeroImgSmall = () => {
	return (
		<HeroImgSmallContainer>
			<img src='/assets/img/small.svg' alt='hero-img' />
		</HeroImgSmallContainer>
	);
};

const HeroImgSmallContainer = styled.section`
	width: 100%;
	position: absolute;
	bottom: -2%;

	img {
		object-fit: cover;
		width: 100%;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export default HeroImgSmall;
