import type { CSSProperties } from "react";

import { CHECKBOX_SIZE_TARGET_CONTAINER } from "../../../constants/checkbox-size.const";

/**
 * Checkbox target container style
 */
export const CHECKBOX_TARGET_CONTAINER_STYLE: CSSProperties = {
	alignItems: "center",
	borderRadius: "50%",
	boxSizing: "border-box",
	display: "inline-flex",
	flexDirection: "row",
	height: CHECKBOX_SIZE_TARGET_CONTAINER,
	justifyContent: "center",
	overflow: "hidden",
	position: "relative",
	width: CHECKBOX_SIZE_TARGET_CONTAINER
}
