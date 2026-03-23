import react from "react";

import type { ButtonContainerUseStyleStateParam } from "../../shared/components/button-container";
import { ButtonContent } from "../../shared/enums/button-content.type";
import { BUTTON_CLICK_PROPERTY_MAP } from "../constants/button-click-property-map.const";
import type { ButtonClickProps } from "../types/button-click-props.type";

/**
 * Derive the click button style state based on parameters
 * @param param
 */
export function useButtonClickStyleState(param: ButtonContainerUseStyleStateParam<ButtonClickProps>): [react.CSSProperties] {
	return [{
		alignItems: "center",
		backgroundColor: param.colour.backgroundColour?.toColourString(),
		borderColor: param.colour.borderColour?.toColourString(),
		borderRadius: BUTTON_CLICK_PROPERTY_MAP.size[param.config.size].shape[param.config.shape].borderRadius,
		borderStyle: BUTTON_CLICK_PROPERTY_MAP.style[param.config.style].borderStyle,
		borderWidth: BUTTON_CLICK_PROPERTY_MAP.style[param.config.style].borderWidth,
		boxShadow: param.colour.boxShadow,
		boxSizing: "border-box",
		columnGap: BUTTON_CLICK_PROPERTY_MAP.size[param.config.size].gap,
		display: "inline-flex",
		flexDirection: "row",
		fontSize: BUTTON_CLICK_PROPERTY_MAP.size[param.config.size].fontSize,
		height: BUTTON_CLICK_PROPERTY_MAP.size[param.config.size].height,
		justifyContent: "center",
		overflow: "hidden",
		paddingLeft: BUTTON_CLICK_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].paddingHorizontal,
		paddingRight: BUTTON_CLICK_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].paddingHorizontal,
		position: "relative",
		width: (
			(param.config.content.content === ButtonContent.Icon) ?
				BUTTON_CLICK_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].iconWidth[param.config.content.iconWidth] :
				undefined
		)
	}];
}
