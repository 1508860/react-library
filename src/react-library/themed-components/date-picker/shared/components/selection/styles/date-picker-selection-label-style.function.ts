import type { CSSProperties } from "react";

import type { Colour, Font } from "@react-library/common";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";

/**
 * Date picker selection label style
 * @param font
 * @param colour
 */
export function datePickerSelectionLabelStyle(font: Font, colour: Colour): CSSProperties {
	return {
		color: colour.toColourString(),
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: DATE_PICKER_PROPERTY_MAP.selection.fontSize,
		fontWeight: DATE_PICKER_PROPERTY_MAP.selection.fontWeight,
	};
};
