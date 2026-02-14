import { useState } from "react";

import { ButtonBase } from "../base";
import { ButtonContent } from "../shared/enums/button-content.type";
import { ButtonShape } from "../shared/enums/button-shape.type";
import { BUTTON_SELECTION_PROPERTY_MAP } from "./constants/button-selection-property-map.const";
import { useButtonSelectionColourState } from "./hooks/use-button-selection-colour-state.hook";
import type { ButtonSelectionProps } from "./types/button-selection-props.type";

/**
 * Component to handle standard selection buttons
 * @param props
 */
export function ButtonSelection(props: ButtonSelectionProps) {

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);

	const [buttonColourState] = useButtonSelectionColourState(props, isHovered, isPressed);

	return ButtonBase(
		props,
		props.onClick,
		buttonColourState,
		isHovered,
		setIsHovered,
		setIsPressed,
		BUTTON_SELECTION_PROPERTY_MAP.size[props.size].iconSize,
		{
			alignItems: "center",
			backgroundColor: buttonColourState.backgroundColour?.toColourString(),
			borderColor: buttonColourState.borderColour?.toColourString(),
			borderRadius: BUTTON_SELECTION_PROPERTY_MAP.size[props.size].shape[(props.isSelected ? ButtonShape.Round : ButtonShape.Soft)].borderRadius,
			borderStyle: BUTTON_SELECTION_PROPERTY_MAP.style[props.style].borderStyle,
			borderWidth: BUTTON_SELECTION_PROPERTY_MAP.style[props.style].borderWidth,
			boxShadow: buttonColourState.boxShadow,
			boxSizing: "border-box",
			display: "inline-flex",
			flexDirection: "row",
			fontSize: BUTTON_SELECTION_PROPERTY_MAP.size[props.size].fontSize,
			columnGap: BUTTON_SELECTION_PROPERTY_MAP.size[props.size].gap,
			height: BUTTON_SELECTION_PROPERTY_MAP.size[props.size].height,
			justifyContent: "center",
			overflow: "hidden",
			paddingLeft: BUTTON_SELECTION_PROPERTY_MAP.size[props.size].content[props.content].paddingHorizontal,
			paddingRight: BUTTON_SELECTION_PROPERTY_MAP.size[props.size].content[props.content].paddingHorizontal,
			position: "relative",
			transitionDuration: `${BUTTON_SELECTION_PROPERTY_MAP.transition.borderRadius.durationMs}ms`,
			transitionProperty: "border-radius",
			width: (
				(props.content === ButtonContent.Icon) ?
					BUTTON_SELECTION_PROPERTY_MAP.size[props.size].content[props.content].iconWidth[props.iconWidth] :
					undefined
			)
		},
		props.isDisabled
	);
}
