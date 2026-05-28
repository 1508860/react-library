import type { CSSProperties } from "react";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";

/**
 * Date picker month item date placeholder style
 */
export const DATE_PICKER_MONTH_ITEM_DATE_PLACEHOLDER_STYLE: CSSProperties = {
	flexShrink: 0,
	height: DATE_PICKER_PROPERTY_MAP.monthItem.date.size,
	width: DATE_PICKER_PROPERTY_MAP.monthItem.date.size
};
