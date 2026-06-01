import type { CSSProperties } from "react";

import {
	MODAL_FULL_SIZE_HEADER_GAP,
	MODAL_FULL_SIZE_HEADER_PADDING_HEIGHT,
	MODAL_FULL_SIZE_HEADER_PADDING_HORIZONTAL
} from "../../../constants/modal-full-size.const";

/**
 * Modal full header style
 */
export const MODAL_FULL_HEADER_STYLE: CSSProperties = {
	alignItems: "center",
	boxSizing: "border-box",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	gap: MODAL_FULL_SIZE_HEADER_GAP,
	height: MODAL_FULL_SIZE_HEADER_PADDING_HEIGHT,
	paddingLeft: MODAL_FULL_SIZE_HEADER_PADDING_HORIZONTAL,
	paddingRight: MODAL_FULL_SIZE_HEADER_PADDING_HORIZONTAL
};
