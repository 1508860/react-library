import type { CSSProperties } from "react";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";

/**
 * Date picker month item weekdays style
 */
export const DATE_PICKER_MONTH_ITEM_WEEKDAYS_STYLE: CSSProperties = {
	alignItems: "stretch",
	display: "flex",
	flexDirection: "row",
	height: DATE_PICKER_PROPERTY_MAP.monthItem.weekday.height,
	marginBottom: DATE_PICKER_PROPERTY_MAP.monthItem.weekday.marginBottom,
	width: "100%"
};
