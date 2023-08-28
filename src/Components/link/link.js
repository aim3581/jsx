import classNames from "classnames";
import useNaviagationContext from "../../hooks/use-navigation";

export default function Link({ to, children, className, activeClassName }) {
	const { navigate, currentPath } = useNaviagationContext();
	const classes = classNames(
		"text-blue-500",
		className,
		currentPath === to && activeClassName
	);
	const handleClick = (event) => {
		event.preventDefault();
		navigate(to);
	};

	return (
		<a className={classes} onClick={handleClick}>
			{children}
		</a>
	);
}
