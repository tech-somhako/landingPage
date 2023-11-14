// GTMProvider.tsx
import { useEffect } from "react";
import { GTM } from "react-gtm-module";

interface GTMProviderProps {
	containerId: string;
}

const GTMProvider: React.FC<GTMProviderProps> = ({ containerId, children }) => {
	useEffect(() => {
		GTM.initialize(containerId);
	}, [containerId]);

	return <>{children}</>;
};

export default GTMProvider;
