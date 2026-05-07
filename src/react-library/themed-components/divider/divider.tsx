import { Fragment } from "react";

import { useColourSchemeContext } from "@react-library/common";

import { dividerStyle } from "./styles/divider-style.function";
import type { DividerProps } from "./types/divider-props.type";

/**
 * Divider component
 */
export function Divider(props: DividerProps) {
	if (props.hide) return <Fragment key="no-divider" />

	return (
		<DividerLine
			{...props}
			key="divider"
		/>
	)
}

/**
 * Divider line component
 */
export function DividerLine(props: DividerProps) {

	const colourScheme = useColourSchemeContext();

	return (
		<div style={dividerStyle(
			props.marginAfter,
			props.marginBefore,
			props.orientation,
			colourScheme
		)} />
	);
}
