import { Fragment } from "react";

import { useColourSchemeContext } from "@react-library/common";

import { sideSheetPanelStyle } from "./styles/divider-style.function";
import type { DividerProps } from "./types/divider-props.type";

/**
 * Divider component
 */
export function Divider(props: DividerProps) {
	if (props.hide) return <Fragment key={"no-divider"} />

	return (
		<DividerLine
			hide={props.hide}
			key="divider"
			orientation={props.orientation}
		/>
	)
}

/**
 * Divider line component
 */
export function DividerLine(props: DividerProps) {

	const colourScheme = useColourSchemeContext();

	return (
		<div style={sideSheetPanelStyle(props.orientation, colourScheme)} />
	);
}
