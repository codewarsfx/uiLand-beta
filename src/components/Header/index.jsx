import styled from "styled-components";

import { Button, Harmburger } from "../uiElements";
import { buttonTypes } from "../uiElements/button";

const Header = () => {
	return (
		<HeaderContainer>
			<div>
				<img src='/assets/img/UL.png' alt='' />
			</div>
			<HeaderCTA>
				<Button type={buttonTypes.login}>Login</Button>
				<Harmburger />
			</HeaderCTA>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5em 0;

	@media (min-width: 768px) {
		width: 95%;
	}
`;

const HeaderCTA = styled.div`
	margin-left: auto;
`;

export default Header;
