import { createContext, useEffect, useState } from "react";

import { getItemsByQuery, getScreensData } from "../firebase";

export const ScreensContext = createContext(null);

export const ScreensContextProvider = ({ children }) => {
	const [screens, setScreens] = useState(null);
	const [filterTerm, setFilterTerm] = useState("");

	const setFilterItem = (term) => {
		setFilterTerm(term);
	};

	useEffect(() => {
		const getScreens = async () => {
			let screens;
			if (!filterTerm) {
				screens = await getScreensData();
			} else {
				screens = await getItemsByQuery(filterTerm);
			}

			if (screens) {
				setScreens(screens);
			}
		
		};
		getScreens();

	}, [filterTerm]);

	return (
		<ScreensContext.Provider value={{
			screens, setFilterItem}}>
			{children}
		</ScreensContext.Provider>
	);
};
