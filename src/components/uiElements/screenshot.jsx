import styled from "styled-components";
import { motion } from "framer-motion";

const Screenshot = ({imgLink,Name}) => {
	return (
		<>
			<ScreenshotContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<img src={imgLink} alt={Name} />
			</ScreenshotContainer>
		</>
	);
};



const ScreenshotContainer = styled(motion.div)`
	width: 48%;
	border-radius: 0.8em;
	height: 40vh;
	background-color: var(--light-grey-color);
	border: 1px solid #eee;
	

	img{
		width: 100%;
		height: 100%;
		border-radius: 0.8em;
		object-fit: fill;
	}

	@media (min-width: 768px) {
		height: 65vh;
		border-radius: 3em;
	}
`;

export default Screenshot;
