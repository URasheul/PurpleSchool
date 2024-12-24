import styles from "./Headling.module.css";
import { HeadlingProps } from "./Headling.props";
import cn from "classnames";


export function Headling({size="l", children} : HeadlingProps): JSX.Element {

	return (
		<>
		{size === "l" && <h2 className={cn(styles.headling, styles.large)}>{children}</h2> }
		{size === "m" && <h3 className={cn(styles.headling,styles.medium)}>{children}</h3> }
		{size === "s" && <h4 className={cn(styles.headling,styles.small)}>{children}</h4> }
		</>
	);
}