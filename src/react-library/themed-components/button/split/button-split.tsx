import { Fragment, useCallback, useRef, useState, type ReactElement } from "react";

import { Tooltip, TooltipInteraction, type TooltipChildProps } from "@react-library/components";
import { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import { ButtonBase } from "../base";
import { ButtonContent } from "../shared/enums/button-content.type";
import { BUTTON_SPLIT_MENU_TOOLTIP_POSITION_STRATEGIES_EXTERNAL } from "./constants/button-split-menu-tooltip-position-strategies-external.const";
import { BUTTON_SPLIT_PROPERTY_MAP } from "./constants/button-split-property-map.const";
import { useButtonSplitColourState } from "./hooks/use-button-split-colour-state.hook";
import { BUTTON_SPLIT_CONTAINER_STYLE } from "./styles/button-split-container-style.const";
import type { ButtonSplitProps } from "./types/button-split-props.type";

/**
 * Component to handle standard split buttons
 * @param props
 */
export function ButtonSplit(props: ButtonSplitProps) {
	return (
		<div
			style={BUTTON_SPLIT_CONTAINER_STYLE}
		>
			<ButtonLeft {...props} key="left" />
			<ButtonMenu {...props} key="menu" />
		</div>
	);
}

function ButtonLeft(props: ButtonSplitProps): ReactElement {

	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const [buttonColourState] = useButtonSplitColourState(props, isHovered, isPressed);

	return (
		ButtonBase(
			props,
			props.onClick,
			buttonColourState,
			isHovered,
			setIsHovered,
			setIsPressed,
			BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.iconSize,
			{
				alignItems: "center",
				backgroundColor: buttonColourState.backgroundColour?.toColourString(),
				borderBottomLeftRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.outside,
				borderBottomRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.inside,
				borderColor: buttonColourState.borderColour?.toColourString(),
				borderStyle: BUTTON_SPLIT_PROPERTY_MAP.style[props.style].borderStyle,
				borderTopLeftRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.outside,
				borderTopRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.borderRadius.inside,
				borderWidth: BUTTON_SPLIT_PROPERTY_MAP.style[props.style].borderWidth,
				boxShadow: buttonColourState.boxShadow,
				boxSizing: "border-box",
				display: "inline-flex",
				flexDirection: "row",
				flexShrink: 0,
				fontSize: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.fontSize,
				columnGap: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.gap,
				height: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].height,
				justifyContent: "center",
				overflow: "hidden",
				paddingLeft: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.content[props.content].paddingHorizontal,
				paddingRight: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.content[props.content].paddingHorizontal,
				position: "relative",
				width: BUTTON_SPLIT_PROPERTY_MAP.size[props.size].button.content[props.content].width
			},
			props.isDisabled
		)
	);
}

function ButtonMenu(props: ButtonSplitProps): ReactElement {
	return (
		<Tooltip
			content={props.menuElement}
			isDisabled={props.isDisabled}
			positionStrategies={BUTTON_SPLIT_MENU_TOOLTIP_POSITION_STRATEGIES_EXTERNAL}
			tooltipInteractionType={TooltipInteraction.Click}
		>
			{(tooltipChildProps) => <ButtonMenuChild
				buttonSplitProps={props}
				tooltipChildProps={tooltipChildProps}
			/>}
		</Tooltip>
	);
}

function ButtonMenuChild(props: {
	buttonSplitProps: ButtonSplitProps;
	tooltipChildProps: TooltipChildProps;
}): ReactElement {

	const [isExpanded, setIsExpanded] = useState<boolean>(() => false);
	const isExpandedRef = useRef<boolean>(isExpanded);
	const handleIsExpanded = useCallback(
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (props.tooltipChildProps.tooltipInteractionType !== TooltipInteraction.Click) return;
			const isExpandedNew = !isExpandedRef.current
			isExpandedRef.current = isExpandedNew;
			setIsExpanded(isExpandedNew);
			props.tooltipChildProps.childProps.onClick(event);
		},
		[props.tooltipChildProps.childProps, props.tooltipChildProps.tooltipInteractionType]
	);
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const [buttonColourState] = useButtonSplitColourState(props.buttonSplitProps, isHovered, isPressed);

	if (props.tooltipChildProps.tooltipInteractionType !== TooltipInteraction.Click) return (
		<Fragment key="no-button-menu-child" />
	);

	return (
		ButtonBase(
			{
				content: ButtonContent.Icon,
				iconName: isExpanded ? MaterialIconName.KeyboardArrowUp : MaterialIconName.KeyboardArrowDown,
				iconStyle: (
					(props.buttonSplitProps.content === ButtonContent.Icon || props.buttonSplitProps.content === ButtonContent.IconLabel) ?
						props.buttonSplitProps.iconStyle :
						MaterialIconStyle.Default
				)
			},
			handleIsExpanded,
			buttonColourState,
			isHovered,
			setIsHovered,
			setIsPressed,
			BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].menu.iconSize,
			{
				alignItems: "center",
				backgroundColor: buttonColourState.backgroundColour?.toColourString(),
				borderBottomLeftRadius: (
					isExpanded ?
						BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].menu.borderRadius.inside.expanded :
						BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].menu.borderRadius.inside.collapsed
				),
				borderBottomRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].menu.borderRadius.outside,
				borderColor: buttonColourState.borderColour?.toColourString(),
				borderStyle: BUTTON_SPLIT_PROPERTY_MAP.style[props.buttonSplitProps.style].borderStyle,
				borderTopLeftRadius: (
					isExpanded ?
						BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].menu.borderRadius.inside.expanded :
						BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].menu.borderRadius.inside.collapsed
				),
				borderTopRightRadius: BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].menu.borderRadius.outside,
				borderWidth: BUTTON_SPLIT_PROPERTY_MAP.style[props.buttonSplitProps.style].borderWidth,
				boxShadow: buttonColourState.boxShadow,
				boxSizing: "border-box",
				display: "inline-flex",
				flexDirection: "row",
				flexShrink: 0,
				height: BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].height,
				justifyContent: "center",
				overflow: "hidden",
				position: "relative",
				transitionDuration: `${BUTTON_SPLIT_PROPERTY_MAP.transition.borderRadius.durationMs}ms`,
				transitionProperty: "border-radius",
				width: BUTTON_SPLIT_PROPERTY_MAP.size[props.buttonSplitProps.size].menu.width
			},
			props.buttonSplitProps.isDisabled,
			props.tooltipChildProps.childProps.ref
		)
	);
}
