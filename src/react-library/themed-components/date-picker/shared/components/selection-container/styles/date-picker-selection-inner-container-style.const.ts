import type { CSSProperties } from "react";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";

/**
 * Date picker selection inner container style
 */
export const DATE_PICKER_SELECTION_INNER_CONTAINER_STYLE: CSSProperties = {
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: DATE_PICKER_PROPERTY_MAP.selection.marginBottom,
	width: "100%"
};
