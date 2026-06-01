import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";
import type { DatePickerColourState } from "../../../types/date-picker-colour-state.type";

/**
 * Resolve date picker selection menu item label style
 * @param font
 * @param colourState
 */
export function datePickerSelectionMenuItemLabelStyle(font: Font, colourState: DatePickerColourState): CSSProperties {
	return {
		color: colourState.selectionMenu.font.toColourString(),
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: DATE_PICKER_PROPERTY_MAP.selectionMenu.fontSize,
		fontWeight: DATE_PICKER_PROPERTY_MAP.selectionMenu.fontWeight
	};
}
