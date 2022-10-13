import styled from "styled-components";

const BrandLogo = ({imageUrl}) => {
	return (
		<BrandLogoCotainer>
			<img src={imageUrl} alt='brandlogo' />
		</BrandLogoCotainer>
	);
};

const BrandLogoCotainer = styled.div`
	width: 50px;
	height: 50px;
	img {
		height: 100%;
		width: 100%;
	}
`;

export default BrandLogo;
