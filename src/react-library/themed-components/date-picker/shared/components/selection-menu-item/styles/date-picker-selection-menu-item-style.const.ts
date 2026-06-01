import type { CSSProperties } from "react";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";

/**
 * Date picker selection menu item style
 */
export const DATE_PICKER_SELECTION_MENU_ITEM_STYLE: CSSProperties = {
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	gap: DATE_PICKER_PROPERTY_MAP.selectionMenu.gap,
	height: "100%",
	position: "relative",
	width: "100%"
};
