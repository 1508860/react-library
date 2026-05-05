import type { CSSProperties } from "react";

import { CHECKBOX_SIZE_CONTAINER_MARGIN_VERTICAL } from "../../../constants/checkbox-size.const";

/**
 * Checkbox container style
 */
export const CHECKBOX_CONTAINER_STYLE: CSSProperties = {
	alignItems: "center",
	boxSizing: "border-box",
	display: "inline-flex",
	flexDirection: "row",
	marginBottom: CHECKBOX_SIZE_CONTAINER_MARGIN_VERTICAL,
	marginTop: CHECKBOX_SIZE_CONTAINER_MARGIN_VERTICAL,
	position: "relative"
};
