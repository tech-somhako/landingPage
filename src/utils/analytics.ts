// utils/analytics.ts

import ReactGA from "react-ga";

export const initGA = () => {
	ReactGA.initialize("G-THY7KKLHYE");
};

export const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
};
