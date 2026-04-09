import type { CSSProperties } from "react";

import {
	MODAL_BASIC_SIZE_CONTENT_GAP,
	MODAL_BASIC_SIZE_CONTENT_PADDING
} from "../../../constants/modal-basic-size.const";

/**
 * Resolve modal basic header style based on parameters
 * @param hasChildren
 * @param isCentered
 */
export function modalBasicHeaderStyle(hasChildren: boolean, isCentered: boolean): CSSProperties {
	return {
		alignItems: isCentered ? "center" : "start",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		gap: MODAL_BASIC_SIZE_CONTENT_GAP,
		paddingBottom: hasChildren ? MODAL_BASIC_SIZE_CONTENT_PADDING : undefined,
		paddingLeft: MODAL_BASIC_SIZE_CONTENT_PADDING,
		paddingRight: MODAL_BASIC_SIZE_CONTENT_PADDING,
		paddingTop: MODAL_BASIC_SIZE_CONTENT_PADDING,
		position: "relative",
		width: "100%"
	};
}
