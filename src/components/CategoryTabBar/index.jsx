import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Pill } from "../uiElements";
import { pillsTypes } from "../uiElements/pills";

const CategoryTabBar = () => {
	// const categories = [];

	return (
		<CategoryTabContainer>
			<CategoryTabWrapper>
				{
					<Pill type={pillsTypes.category}>
						<NavLink
							to='/'
							className='pills'
							style={({ isActive }) => {
								return {
									backgroundColor: isActive ? "var(--light-grey-color)" : "",
								};
							}}
							end
						>
							FINTECH
						</NavLink>
					</Pill>
				}
			</CategoryTabWrapper>
		</CategoryTabContainer>
	);
};

const CategoryTabContainer = styled.section`
	margin: 1.5em 0;
	padding: 1em 0;
	border: 1px solid var(--light-grey-color);
	@media (min-width: 768px) {
		margin: 3em 0;
	}
`;

const CategoryTabWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	gap: 0.8em;

	::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 768px) {
		gap: 2.8em;
	}
`;

export default CategoryTabBar;
