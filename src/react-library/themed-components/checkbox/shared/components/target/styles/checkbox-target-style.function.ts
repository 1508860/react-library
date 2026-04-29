import type { CSSProperties } from "react";

import type { Size } from "@react-library/common";

import {
	CHECKBOX_SIZE_ICON,
	CHECKBOX_SIZE_TARGET_BORDER_RADIUS,
	CHECKBOX_SIZE_TARGET_BORDER_WIDTH_SELECTED,
	CHECKBOX_SIZE_TARGET_BORDER_WIDTH_UNSELECTED
} from "../../../constants/checkbox-size.const";
import { CheckboxSelectedState } from "../../../enums/checkbox-selected-state.type";
import type { CheckboxColourState } from "../../../types/checkbox-colour-state.type";

/**
 * Resolve checkbox target style based on parameters
 * @param value
 * @param checkboxColourState
 */
export function checkboxTargetStyle(checkboxColourState: CheckboxColourState, checkboxSelectedState: CheckboxSelectedState): CSSProperties {

	const borderWidth: Size = (
		checkboxSelectedState === CheckboxSelectedState.Unselected ?
			CHECKBOX_SIZE_TARGET_BORDER_WIDTH_UNSELECTED :
			CHECKBOX_SIZE_TARGET_BORDER_WIDTH_SELECTED
	);

	return {
		alignItems: "center",
		backgroundColor: checkboxColourState.backgroundColour?.toColourString(),
		borderColor: checkboxColourState.borderColour?.toColourString(),
		borderRadius: CHECKBOX_SIZE_TARGET_BORDER_RADIUS,
		borderStyle: "solid",
		borderWidth: borderWidth,
		boxSizing: "border-box",
		display: "flex",
		flexShrink: 0,
		height: CHECKBOX_SIZE_ICON,
		justifyContent: "center",
		width: CHECKBOX_SIZE_ICON
	};
}
