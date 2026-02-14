import { useState } from "react";

import { ButtonBase } from "../base";
import { BUTTON_FLOATING_PROPERTY_MAP } from "./constants/button-floating-property-map.const";
import { useButtonFloatingColourState } from "./hooks/use-button-floating-colour-state.hook";
import type { ButtonFloatingProps } from "./types/button-floating-props.type";

/**
 * Component to handle standard floating buttons
 * @param props
 */
export function ButtonFloating(props: ButtonFloatingProps) {

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);

	const [buttonColourState] = useButtonFloatingColourState(props, isHovered, isPressed);

	return ButtonBase(
		props,
		props.onClick,
		buttonColourState,
		isHovered,
		setIsHovered,
		setIsPressed,
		BUTTON_FLOATING_PROPERTY_MAP.size[props.size].iconSize,
		{
			alignItems: "center",
			backgroundColor: buttonColourState.backgroundColour?.toColourString(),
			borderColor: buttonColourState.borderColour?.toColourString(),
			borderRadius: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].shape[props.shape].borderRadius,
			boxShadow: buttonColourState.boxShadow,
			boxSizing: "border-box",
			display: "inline-flex",
			flexDirection: "row",
			fontSize: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].fontSize,
			columnGap: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].gap,
			height: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].height,
			justifyContent: "center",
			overflow: "hidden",
			paddingLeft: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].content[props.content].paddingHorizontal,
			paddingRight: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].content[props.content].paddingHorizontal,
			position: "relative",
			width: BUTTON_FLOATING_PROPERTY_MAP.size[props.size].content[props.content].iconWidth
		},
		props.isDisabled
	);
}
