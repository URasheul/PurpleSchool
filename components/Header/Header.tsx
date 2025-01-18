'use client'

import Link from "next/link";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import GithubIcon from "./github-icon.svg";
import  { Context } from "@/context/AppContext";
import { useContext } from "react";




export function Header({title} : HeaderProps): JSX.Element {

	const {href} = useContext(Context);

	return (		
			<header className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
				<Link target="_blank" href={href || ''} className={styles.gitIcon}>
				<GithubIcon/>
				</Link>
			</header>		
	);
}