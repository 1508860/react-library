import { useColourSchemeContext } from "@react-library/common";

import { sideSheetPanelStyle } from "./styles/divider-style.function";
import type { DividerProps } from "./types/divider-props.type";

/**
 * Divider component
 */
export function Divider(props: DividerProps) {

	const colourScheme = useColourSchemeContext();

	return (
		<div style={sideSheetPanelStyle(props.orientation, colourScheme)} />
	);
}
