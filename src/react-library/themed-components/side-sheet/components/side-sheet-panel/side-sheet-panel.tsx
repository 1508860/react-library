import { useColourSchemeContext } from "@react-library/common";

import { SideSheetPanelHeader } from "../side-sheet-panel-header";
import { sideSheetPanelStyle } from "./styles/side-sheet-panel-style.function";
import type { SideSheetPanelProps } from "./types/side-sheet-panel-props.type";
import { SideSheetPanelBody } from "../side-sheet-panel-body";

/**
 * Side sheet panel component
 */
export function SideSheetPanel(props: SideSheetPanelProps) {

	const colourScheme = useColourSchemeContext();

	return (
		<div style={sideSheetPanelStyle(props.show, props.width, colourScheme)}>
			<SideSheetPanelHeader
				key="header"
				onBack={props.onBack}
				onClose={props.onClose}
				show={props.show}
				title={props.title}
			/>
			<SideSheetPanelBody
				key="body"
				panelChild={props.panelChild}
				show={props.show}
			/>
		</div>
	);
}
