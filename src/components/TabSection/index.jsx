import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Pill } from "../uiElements";
import { pillsTypes } from "../uiElements/pills";

const Tab = () => {
	return (
		<TabSectionContainer>
			<TabSectionWrapper>
				<Pill type={pillsTypes.base}>
					<NavLink
						to='/'
						className='pills'
						style={({ isActive }) => {
							return {
								backgroundColor: isActive ? "var(--accent-color)" : "",
							};
						}}
						end
					>
						Screens
					</NavLink>
				</Pill>
				<Pill type={pillsTypes.base}>
					<NavLink
						to='/elements'
						className='pills'
						style={({ isActive }) => {
							return {
								backgroundColor: isActive ? "var(--accent-color)" : "",
							};
						}}
					>
						Elements
					</NavLink>
				</Pill>
			</TabSectionWrapper>
		</TabSectionContainer>
	);
};

const TabSectionContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1.5em 0;
	@media (min-width: 768px) {
		margin: 3em 0;
	}
`;

const TabSectionWrapper = styled.div`
	display: inline-flex;
	padding: 0.5em;
	border-radius: 67px;
	background-color: var(--primary-color);
`;

export default Tab;
