import { Fragment } from "react"

import { useColourSchemeContext, useFontContext } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";

import { IconClick } from "../../../shared";

import { SIDE_SHEET_PANEL_HEADER_ICON_SIZE } from "./constants/side-sheet-panel-header-icon-size.const";
import { SIDE_SHEET_PANEL_HEADER_STYLE } from "./styles/side-sheet-panel-header-style.const";
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
			style={SIDE_SHEET_PANEL_HEADER_STYLE}
		>
			{
				props.onBack ?
					<IconClick
						colour={colourScheme.surface.variant.onColour}
						key="icon-arrow-back"
						name={MaterialIconName.ArrowBack}
						onClick={props.onBack}
						size={SIDE_SHEET_PANEL_HEADER_ICON_SIZE}
					/> :
					<Fragment key="no-icon-arrow-back" />
			}
			<div style={sideSheetPanelHeaderTitleStyle(colourScheme, font)}>
				{props.title}
			</div>
			<IconClick
				colour={colourScheme.surface.variant.onColour}
				key="icon-close"
				name={MaterialIconName.Close}
				onClick={props.onClose}
				size={SIDE_SHEET_PANEL_HEADER_ICON_SIZE}
			/>
		</div>
	);
}
