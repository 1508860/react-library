import type { CSSProperties } from "react";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";

/**
 * Date picker selection menu item icon placeholder style
 */
export const DATE_PICKER_SELECTION_MENU_ITEM_ICON_PLACEHOLDER_STYLE: CSSProperties = {
	flexShrink: 0,
	height: DATE_PICKER_PROPERTY_MAP.selectionMenu.iconSize,
	width: DATE_PICKER_PROPERTY_MAP.selectionMenu.iconSize
};
