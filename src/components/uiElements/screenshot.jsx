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
	border-radius: 0.8em;
	background-color: var(--light-grey-color);
	border: 1px solid #eee;
	

	img{
		height: 100%;
    max-height: 42rem;
    object-fit: fill;
    display: block;
    border-radius: 2em;
	}

	@media (min-width: 768px) {
		border-radius: 3em;
		max-width: 50%;
		flex: 0 0 50%;
	}
`;

export default Screenshot;
