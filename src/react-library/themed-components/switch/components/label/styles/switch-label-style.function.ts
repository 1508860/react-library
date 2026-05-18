import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { SWITCH_PROPERTY_MAP } from "../../../constants/switch-property-map.const";
import type { SwitchColourState } from "../../../types/switch-colour-state.type";

/**
 * Resolve switch label style based on parameters
 * @param isDisabled
 * @param font
 * @param colourState
 */
export function switchLabelStyle(isDisabled: boolean | undefined, font: Font, colourState: SwitchColourState): CSSProperties {
	return {
		boxSizing: "border-box",
		color: colourState.labelColour.toColourString(),
		cursor: !isDisabled ? "pointer" : undefined,
		flexGrow: 1,
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: SWITCH_PROPERTY_MAP.label.fontSize,
		lineHeight: SWITCH_PROPERTY_MAP.label.lineHeight,
		paddingRight: SWITCH_PROPERTY_MAP.label.gap
	};
}
