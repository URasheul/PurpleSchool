import styles from "./Headling.module.css";
import { HeadlingProps } from "./Headling.props";
import cn from "classnames";


export function Headling({size="l", children} : HeadlingProps): JSX.Element {

	return (
		<>
		{size === "l" && <h1 className={cn(styles.headling, styles.large)}>{children}</h1> }
		{size === "m" && <h2 className={cn(styles.headling,styles.medium)}>{children}</h2> }
		{size === "s" && <h3 className={cn(styles.headling,styles.small)}>{children}</h3> }
		</>
	);
}