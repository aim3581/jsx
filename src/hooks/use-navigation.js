import { useContext } from "react";
import NavigationContext from "../context/navigation";

export default function useNaviagationContext() {
	return useContext(NavigationContext);
}
