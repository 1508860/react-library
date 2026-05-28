import type { CSSProperties } from "react";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";
import type { DatePickerColourState } from "../../../types/date-picker-colour-state.type";

/**
 * Date picker container style
 */
export function datePickerContainerStyle(colourState: DatePickerColourState): CSSProperties {
	return {
		backgroundColor: colourState.background.toColourString(),
		borderRadius: DATE_PICKER_PROPERTY_MAP.container.borderRadius,
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		height: DATE_PICKER_PROPERTY_MAP.container.height,
		padding: DATE_PICKER_PROPERTY_MAP.container.padding
	};
};
