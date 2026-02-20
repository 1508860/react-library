import { Orientation, useColourSchemeContext } from "@react-library/common";

import { Divider } from "../../../divider";
import { SideSheetPanelBody } from "../side-sheet-panel-body";
import { SideSheetPanelFooter } from "../side-sheet-panel-footer";
import { SideSheetPanelHeader } from "../side-sheet-panel-header";
import { sideSheetPanelStyle } from "./styles/side-sheet-panel-style.function";
import type { SideSheetPanelProps } from "./types/side-sheet-panel-props.type";

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
				show={props.showContent}
				title={props.title}
				width={props.width}
			/>
			<Divider
				hide={!props.showHeaderDivider}
				key="header-divider"
				orientation={Orientation.Horizontal}
			/>
			<SideSheetPanelBody
				key="body"
				body={props.body}
				show={props.showContent}
				width={props.width}
			/>
			<Divider
				hide={(!props.showFooterDivider || !props.footer)}
				key="footer-divider"
				orientation={Orientation.Horizontal}
			/>
			<SideSheetPanelFooter
				key="footer"
				footer={props.footer}
				show={props.showContent}
				width={props.width}
			/>
		</div>
	);
}
