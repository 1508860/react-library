import type { CSSProperties } from "react";

import type { ButtonContainerUseStyleStateParam } from "../../../../shared/components/button-container";
import { BUTTON_SPLIT_PROPERTY_MAP } from "../../../constants/button-split-property-map.const";
import type { ButtonSplitProps } from "../../../types/button-split-props.type";

/**
 * Derive the split button standard style state based on parameters
 * @param param
 */
export function useButtonSplitStandardStyleState(param: ButtonContainerUseStyleStateParam<ButtonSplitProps>): [CSSProperties] {
	return [{
		alignItems: "center",
		backgroundColor: param.colour.backgroundColour?.toColourString(),
		borderBottomLeftRadius: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.borderRadius.outside,
		borderBottomRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.borderRadius.inside,
		borderColor: param.colour.borderColour?.toColourString(),
		borderStyle: BUTTON_SPLIT_PROPERTY_MAP.style[param.config.style].borderStyle,
		borderTopLeftRadius: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.borderRadius.outside,
		borderTopRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.borderRadius.inside,
		borderWidth: BUTTON_SPLIT_PROPERTY_MAP.style[param.config.style].borderWidth,
		boxShadow: param.colour.boxShadow,
		boxSizing: "border-box",
		columnGap: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.gap,
		display: "inline-flex",
		flexDirection: "row",
		flexShrink: 0,
		fontSize: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.fontSize,
		height: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].height,
		justifyContent: "center",
		overflow: "hidden",
		paddingLeft: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.content[param.config.content.content].paddingHorizontal,
		paddingRight: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.content[param.config.content.content].paddingHorizontal,
		position: "relative",
		width: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].button.content[param.config.content.content].width
	}];
}
