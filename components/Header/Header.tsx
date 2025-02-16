import Link from "next/link";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import GithubIcon from "./github-icon.svg";



export function Header({title} : HeaderProps): JSX.Element {

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>{title}</h1>
			<Link href={''} className={styles.gitIcon}>
			<GithubIcon/>
			</Link>
		</header>
	);
}