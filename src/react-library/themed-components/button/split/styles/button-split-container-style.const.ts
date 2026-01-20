import type { CSSProperties } from "react";

import { BUTTON_SPLIT_PROPERTY_MAP } from "../constants/button-split-property-map.const";

/**
 * Button split container style
 */
export const BUTTON_SPLIT_CONTAINER_STYLE: CSSProperties = {
	columnGap: BUTTON_SPLIT_PROPERTY_MAP.gap,
	display: "inline-flex",
	flexDirection: "row",
	overflow: "visible"
};
