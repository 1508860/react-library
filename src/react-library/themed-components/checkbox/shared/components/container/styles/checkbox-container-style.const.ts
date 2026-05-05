import type { CSSProperties } from "react";

import { CHECKBOX_SIZE_CONTAINER_PADDING_VERTICAL } from "../../../constants/checkbox-size.const";

/**
 * Checkbox container style
 */
export const CHECKBOX_CONTAINER_STYLE: CSSProperties = {
	alignItems: "center",
	boxSizing: "border-box",
	display: "inline-flex",
	flexDirection: "row",
	paddingBottom: CHECKBOX_SIZE_CONTAINER_PADDING_VERTICAL,
	paddingTop: CHECKBOX_SIZE_CONTAINER_PADDING_VERTICAL,
	position: "relative"
};
