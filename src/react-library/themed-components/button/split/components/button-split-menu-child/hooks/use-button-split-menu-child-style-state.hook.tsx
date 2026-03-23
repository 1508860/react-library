import react from "react";

import { useTooltipShowContext } from "@react-library/components";

import type { ButtonContainerUseStyleStateParam } from "../../../../shared/components/button-container";
import { BUTTON_SPLIT_PROPERTY_MAP } from "../../../constants/button-split-property-map.const";
import type { ButtonSplitProps } from "../../../types/button-split-props.type";

/**
 * Derive the split button menu child style state based on parameters
 * @param param
 */
export function useButtonSplitMenuChildStyleState(param: ButtonContainerUseStyleStateParam<ButtonSplitProps>): [react.CSSProperties] {

	const tooltipShow = useTooltipShowContext();

	return [{
		alignItems: "center",
		backgroundColor: param.colour.backgroundColour?.toColourString(),
		borderBottomLeftRadius: (
			tooltipShow ?
				BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].menu.borderRadius.inside.expanded :
				BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].menu.borderRadius.inside.collapsed
		),
		borderBottomRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].menu.borderRadius.outside,
		borderColor: param.colour.borderColour?.toColourString(),
		borderStyle: BUTTON_SPLIT_PROPERTY_MAP.style[param.config.style].borderStyle,
		borderTopLeftRadius: (
			tooltipShow ?
				BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].menu.borderRadius.inside.expanded :
				BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].menu.borderRadius.inside.collapsed
		),
		borderTopRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].menu.borderRadius.outside,
		borderWidth: BUTTON_SPLIT_PROPERTY_MAP.style[param.config.style].borderWidth,
		boxShadow: param.colour.boxShadow,
		boxSizing: "border-box",
		display: "inline-flex",
		flexDirection: "row",
		flexShrink: 0,
		height: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].height,
		justifyContent: "center",
		overflow: "hidden",
		position: "relative",
		transitionDuration: `${BUTTON_SPLIT_PROPERTY_MAP.transition.borderRadius.durationMs}ms`,
		transitionProperty: "border-radius",
		width: BUTTON_SPLIT_PROPERTY_MAP.size[param.config.size].menu.width
	}];
}
