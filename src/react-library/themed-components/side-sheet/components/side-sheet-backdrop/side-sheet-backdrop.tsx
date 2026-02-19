import { Fragment } from "react";

import { useColourSchemeContext } from "@react-library/common";

import { sideSheetBackdropStyle } from "./styles/side-sheet-backdrop-style.function";
import type { SideSheetBackdropProps } from "./types/side-sheet-backdrop-props.type";

/**
 * Component to handle a side sheet backdrop
 * @param props
 */
export function NavigationRailBackdrop(props: SideSheetBackdropProps) {

	const colourScheme = useColourSchemeContext();

	return (
		props.show ?
			<div
				onClick={props.onClose}
				key="backdrop"
				style={sideSheetBackdropStyle(colourScheme)}
			/> :
			<Fragment key="no-backdrop" />
	);
}
