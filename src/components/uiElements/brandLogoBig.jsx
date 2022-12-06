import styled from "styled-components";
const BrandLogoBig = ({ imageUrl }) => {
	return (
		<BrandLogoCotainer>
        	<img src={imageUrl}  alt='brandlogo' />
		</BrandLogoCotainer>
	);
};

const BrandLogoCotainer = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 1em;
    overflow:hidden;
	img {
		height: 100%;
		width: 100%;
        border-radius: 1em;
	}
	@media (min-width: 768px) {
		width: 90px;
		height: 90px;

	}
`;

export default BrandLogoBig;
