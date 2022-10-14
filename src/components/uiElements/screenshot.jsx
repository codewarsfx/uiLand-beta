import styled from "styled-components";
import { motion } from "framer-motion";

const Screenshot = () => {
	return (
		<>
			<ScreenshotContainer initial={{opacity:0}} animate={{opacity:1}} />
		</>
	);
};



const ScreenshotContainer = styled(motion.div)`
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
