import type { CSSProperties } from "react";

import { RADIO_BUTTON_SIZE_CONTAINER_PADDING_VERTICAL } from "../../../constants/radio-button-size.const";

/**
 * Radio button container style
 */
export const RADIO_BUTTON_CONTAINER_STYLE: CSSProperties = {
	alignItems: "center",
	boxSizing: "border-box",
	display: "inline-flex",
	flexDirection: "row",
	paddingBottom: RADIO_BUTTON_SIZE_CONTAINER_PADDING_VERTICAL,
	paddingTop: RADIO_BUTTON_SIZE_CONTAINER_PADDING_VERTICAL,
	position: "relative"
};
