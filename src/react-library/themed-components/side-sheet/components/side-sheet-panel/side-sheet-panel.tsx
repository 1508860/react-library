import { Orientation, useColourSchemeContext } from "@react-library/common";
import {
	TransitionSize,
	TransitionSizeDirection,
	TransitionTiming
} from "@react-library/components";

import { Divider } from "../../../divider";

import { SIDE_SHEET_PANEL_TRANSITION_DURATION_MS } from "../../constants/side-sheet-panel-transition-duration-ms.const";

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
		<TransitionSize
			direction={TransitionSizeDirection.Horizontal}
			durationMs={SIDE_SHEET_PANEL_TRANSITION_DURATION_MS}
			timing={TransitionTiming.EaseInOut}
			height={"100%"}
			width={props.show ? props.width : 0}
		>
			<div style={sideSheetPanelStyle(colourScheme)}>
				<SideSheetPanelHeader
					key="header"
					onBack={props.onBack}
					onClose={props.onClose}
					show={props.showContent}
					title={props.title}
					width={props.width}
				/>
				<SideSheetPanelBody
					body={props.body}
					includeBodyPaddingBottom={props.includeBodyPaddingBottom && props.showFooterDivider && !!props.footer}
					includeBodyPaddingHorizontal={props.includeBodyPaddingHorizontal}
					key="body"
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
		</TransitionSize>
	);
}
