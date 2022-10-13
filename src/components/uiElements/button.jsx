import styled from "styled-components";

export const buttonTypes = {
	base: "base",
	primary: "primary",
	login: "login",
};

const getButton = (buttonType) => {
	return {
		[buttonTypes.base]: BaseButton,
		[buttonTypes.primary]: PrimaryButton,
		[buttonTypes.login]: LoginButton,
	}[buttonType];
};

const Button = ({ type, children }) => {
	const ButtonType = getButton(type);

	return (
		<>
			<ButtonType>{children}</ButtonType>
		</>
	);
};

//base button style
const BaseButton = styled.button`
	padding: 0.6em 2.4em;
	font-size: 16px;
	color: var(--primary-color);
	border: none;
	cursor: pointer;

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

const PrimaryButton = styled(BaseButton)`
	color: var(--primary-color);
	background-color: var(--text-color-light);
	border-radius: 8px;
	transition: transform 0.1s ease;

	:hover {
		transform: scale(1.05);
	}
`;

const LoginButton = styled(PrimaryButton)`
	display: none;
	@media (min-width: 768px) {
		display: block;
	}
`;

export default Button;
