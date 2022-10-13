import Hero from "../components/Hero";
import Tab from "../components/TabSection";

import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Hero />
			<Tab />
			<Outlet />
		</>
	);
};

export default Home;
