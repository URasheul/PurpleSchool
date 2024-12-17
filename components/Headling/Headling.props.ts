import { HTMLAttributes } from "react";

export interface HeadlingProps extends HTMLAttributes<HTMLHeadingElement> {
	size?: "s" | "m" | "l";
}