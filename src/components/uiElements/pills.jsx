import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const pillsTypes = {
	base: "base",
	category: "category",
};

const getPill = (pillType) => {
	return {
		[pillsTypes.base]: BasePill,
		[pillsTypes.category]: CategoryPill,
	}[pillType];
};

const Pill = ({ type, children }) => {
	const PillType = getPill(type);

	return (
		<>
			<PillType>{children}</PillType>
		</>
	);
};

//base pill style
const BasePill = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--text-color-light);
	font-size: 15px;
	padding: 0.4em 0.9em;
	border-radius: 5em;

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

// pill styles for the category scroll
const CategoryPill = styled(BasePill)`
	border: 1px solid var(--light-grey-color);
	color: var(---text-color-dark);
	font-size: 14px;
	transition: background-color 0.2s ease;

	:first-child {
		margin-left: 0.8em;
	}

	:hover {
		background-color: var(--light-grey-color);
	}

	@media (min-width: 768px) {
		margin-left: 3em;
	}
`;

export default Pill;
