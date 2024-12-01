import { HTMLAttributes, ReactNode } from "react";

export interface HeroProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
}