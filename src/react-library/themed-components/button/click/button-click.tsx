import { useState } from "react";

import { ButtonBase } from "../base";
import { ButtonContent } from "../shared/enums/button-content.type";
import { BUTTON_CLICK_PROPERTY_MAP } from "./constants/button-click-property-map.const";
import { useButtonClickColourState } from "./hooks/use-button-click-colour-state.hook";
import type { ButtonClickProps } from "./types/button-click-props.type";

/**
 * Component to handle standard click buttons
 * @param props
 */
export function ButtonClick(props: ButtonClickProps) {

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);

	const [buttonColourState] = useButtonClickColourState(props, isHovered, isPressed);

	return ButtonBase(
		props,
		props.onClick,
		buttonColourState,
		isHovered,
		setIsHovered,
		setIsPressed,
		BUTTON_CLICK_PROPERTY_MAP.size[props.size].iconSize,
		{
			alignItems: "center",
			backgroundColor: buttonColourState.backgroundColour?.toColourString(),
			borderColor: buttonColourState.borderColour?.toColourString(),
			borderRadius: BUTTON_CLICK_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius,
			borderStyle: BUTTON_CLICK_PROPERTY_MAP.style[props.style].borderStyle,
			borderWidth: BUTTON_CLICK_PROPERTY_MAP.style[props.style].borderWidth,
			boxShadow: buttonColourState.boxShadow,
			boxSizing: "border-box",
			display: "inline-flex",
			flexDirection: "row",
			fontSize: BUTTON_CLICK_PROPERTY_MAP.size[props.size].fontSize,
			columnGap: BUTTON_CLICK_PROPERTY_MAP.size[props.size].gap,
			height: BUTTON_CLICK_PROPERTY_MAP.size[props.size].height,
			justifyContent: "center",
			overflow: "hidden",
			paddingLeft: BUTTON_CLICK_PROPERTY_MAP.size[props.size].content[props.content].paddingHorizontal,
			paddingRight: BUTTON_CLICK_PROPERTY_MAP.size[props.size].content[props.content].paddingHorizontal,
			position: "relative",
			width: (
				(props.content === ButtonContent.Icon) ?
					BUTTON_CLICK_PROPERTY_MAP.size[props.size].content[props.content].iconWidth[props.iconWidth] :
					undefined
			)
		},
		props.isDisabled
	);
}
