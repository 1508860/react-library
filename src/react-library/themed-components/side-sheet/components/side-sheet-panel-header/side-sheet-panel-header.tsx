import { Fragment } from "react"

import { useColourSchemeContext, useFontContext } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";

import { SideSheetPanelHeaderIcon } from "../side-sheet-panel-header-icon";

import { sideSheetPanelHeaderStyle } from "./styles/side-sheet-panel-header-style.function";
import { sideSheetPanelHeaderTitleStyle } from "./styles/side-sheet-panel-header-title-style.function";
import type { SideSheetPanelHeaderProps } from "./types/side-sheet-panel-header-props.type";

/**
 * Side sheet panel header component
 */
export function SideSheetPanelHeader(props: SideSheetPanelHeaderProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	if (!props.show) return (
		<Fragment key="no-side-sheet-panel-header" />
	);

	return (
		<div
			key="side-sheet-panel-header"
			style={sideSheetPanelHeaderStyle(props.width)}
		>
			<SideSheetPanelHeaderIcon
				name={MaterialIconName.ArrowBack}
				onClick={props.onBack}
				key="icon-arrow-back"
			/>
			<div style={sideSheetPanelHeaderTitleStyle(colourScheme, font)}>
				{props.title}
			</div>
			<SideSheetPanelHeaderIcon
				name={MaterialIconName.Close}
				onClick={props.onClose}
				key="icon-close"
			/>
		</div>
	);
}
