import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
	const [currentPath, setCusrrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const handler = () => {
			setCusrrentPath(window.location.pathname);
		};
		window.addEventListener("popstate", handler);
		return () => {
			window.removeEventListener("popstate", handler);
		};
	}, []);

	const navigate = (to) => {
		window.history.pushState({}, "", to);
		setCusrrentPath(to);
	};

	const valueToShare = {
		currentPath,
		navigate,
	};
	return (
		<NavigationContext.Provider value={valueToShare}>
			{children}
		</NavigationContext.Provider>
	);
};

export { NavigationProvider };
export default NavigationContext;
