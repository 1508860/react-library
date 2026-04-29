import type { CSSProperties } from "react";

import { RADIO_BUTTON_SIZE_TARGET_CONTAINER } from "../../../constants/radio-button-size.const";

/**
 * Radio button target container style
 */
export const RADIO_BUTTON_TARGET_CONTAINER_STYLE: CSSProperties = {
	alignItems: "center",
	borderRadius: "50%",
	boxSizing: "border-box",
	display: "inline-flex",
	flexDirection: "row",
	height: RADIO_BUTTON_SIZE_TARGET_CONTAINER,
	justifyContent: "center",
	overflow: "hidden",
	position: "relative",
	width: RADIO_BUTTON_SIZE_TARGET_CONTAINER
};
