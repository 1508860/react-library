import type { CSSProperties } from "react";

import { MODAL_BASIC_SIZE_CONTENT_PADDING } from "../../../constants/modal-basic-size.const";

/**
 * Modal basic actions style
 */
export const MODAL_BASIC_ACTIONS_STYLE: CSSProperties = {
	boxSizing: "border-box",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	justifyContent: "end",
	padding: MODAL_BASIC_SIZE_CONTENT_PADDING,
	position: "relative",
	width: "100%"
};
