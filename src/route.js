import useNaviagationContext from "./hooks/use-navigation";

export default function Route({ path, children }) {
	const { currentPath } = useNaviagationContext();

	if (path === currentPath) {
		return children;
	}
	return null;
}
