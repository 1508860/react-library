import type { CSSProperties } from "react";

import {
	RADIO_BUTTON_SIZE_CONTAINER_GAP,
	RADIO_BUTTON_SIZE_CONTAINER_PADDING_VERTICAL
} from "../../../constants/radio-button-size.const";

/**
 * Resolve radio button container style based on parameters
 * @param isDisabled
 * @param isHovered
 */
export function radioButtonContainerStyle(isDisabled: boolean, isHovered: boolean): CSSProperties {
	return {
		alignItems: "center",
		boxSizing: "border-box",
		cursor: (!isDisabled && isHovered) ? "pointer" : undefined,
		display: "inline-flex",
		flexDirection: "row",
		gap: RADIO_BUTTON_SIZE_CONTAINER_GAP,
		paddingBottom: RADIO_BUTTON_SIZE_CONTAINER_PADDING_VERTICAL,
		paddingTop: RADIO_BUTTON_SIZE_CONTAINER_PADDING_VERTICAL,
		position: "relative"
	};
}
