import type { CSSProperties } from "react";

import {
	CHECKBOX_SIZE_CONTAINER_GAP,
	CHECKBOX_SIZE_CONTAINER_PADDING_VERTICAL
} from "../../../constants/checkbox-size.const";

/**
 * Resolve checkbox container style based on parameters
 * @param isDisabled
 * @param isHovered
 */
export function checkboxContainerStyle(isDisabled: boolean, isHovered: boolean): CSSProperties {
	return {
		alignItems: "center",
		boxSizing: "border-box",
		cursor: (!isDisabled && isHovered) ? "pointer" : undefined,
		display: "inline-flex",
		flexDirection: "row",
		gap: CHECKBOX_SIZE_CONTAINER_GAP,
		paddingBottom: CHECKBOX_SIZE_CONTAINER_PADDING_VERTICAL,
		paddingTop: CHECKBOX_SIZE_CONTAINER_PADDING_VERTICAL,
		position: "relative"
	};
}
