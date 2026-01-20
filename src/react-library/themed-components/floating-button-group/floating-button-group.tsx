import { useCallback, useRef, useState, type ReactElement, type ReactNode } from "react";

import {
	ColourSchemeStyle,
	ColourSchemeStyleStandardToContainer,
	Orientation,
	PositionStrategyInternal,
	type ColourSchemeStyleStandard,
	type PositionStrategyInternalCorner
} from "@react-library/common";

import {
	ButtonContent,
	ButtonFloating,
	ButtonShape,
	type ButtonSizeFloating
} from "../button";

import { FLOATING_BUTTON_GROUP_MENU_ICON_CLOSE } from "./constants/floating-button-group-menu-icon.const";
import { FloatingButtonGroupButton } from "./enums/floating-button-group-button.type";
import { useFloatingButtonGroupPositionState } from "./hooks/use-floating-button-group-position-state.hook";
import type { IFloatingButtonGroupPosition } from "./interfaces/floating-button-group-position.interface";
import { floatingButtonGroupButtonStyle } from "./styles/floating-button-group-button-style.function";
import { FLOATING_BUTTON_GROUP_CONTAINER_STYLE } from "./styles/floating-button-group-container-style.const";
import { FLOATING_BUTTON_GROUP_MENU_CHILD_STYLE } from "./styles/floating-button-group-menu-child-style.const";
import { floatingButtonGroupMenuChildrenStyle } from "./styles/floating-button-group-menu-children-style.function";
import { floatingButtonGroupMenuScrollStyle } from "./styles/floating-button-group-menu-scroll-style.function";
import type {
	FloatingButtonGroupButtonDefault,
	FloatingButtonGroupButtonMenu,
	FloatingButtonGroupButtonMenuChild
} from "./types/floating-button-group-button.type";
import type { FloatingButtonGroupProps } from "./types/floating-button-group-props.type";

/**
 * Component to handle floating button groups
 * @param props
 */
export function FloatingButtonGroup(props: FloatingButtonGroupProps) {

	const [positionState] = useFloatingButtonGroupPositionState(
		props.positionStrategy,
		props.button.type == FloatingButtonGroupButton.Menu ? props.button.orientation : Orientation.Vertical
	)

	return (
		<div
			key="floating-button-group-container"
			style={FLOATING_BUTTON_GROUP_CONTAINER_STYLE}
		>
			{props.button.type === FloatingButtonGroupButton.Default ?
				<ButtonDefault
					button={props.button}
					colourScheme={props.button.colourSchemeStyle}
					key={`${props.button.type}-${props.button.key}`}
					position={positionState}
					size={props.size}
				/> :
				<ButtonMenu
					button={props.button}
					colourScheme={props.button.colourSchemeStyle}
					key={`${props.button.type}-${props.button.key}`}
					position={positionState}
					positionStrategy={props.positionStrategy}
					size={props.size}
				/>}
			{props.children}
		</div>
	);
}

function ButtonDefault(props: {
	button: FloatingButtonGroupButtonDefault;
	colourScheme: ColourSchemeStyle;
	position: IFloatingButtonGroupPosition;
	size: ButtonSizeFloating;
}): ReactElement {
	return (
		<div
			key="floating-button-group-button"
			style={floatingButtonGroupButtonStyle(props.position)}
		>
			{
				props.button.content === ButtonContent.Icon ?
					<ButtonFloating
						colourSchemeStyle={props.colourScheme}
						content={props.button.content}
						iconName={props.button.iconName}
						iconStyle={props.button.iconStyle}
						isDisabled={props.button.isDisabled}
						key={props.button.key}
						onClick={props.button.onClick}
						shape={ButtonShape.Soft}
						size={props.size}
					/> :
					(
						props.button.content === ButtonContent.IconLabel ?
							<ButtonFloating
								colourSchemeStyle={props.colourScheme}
								content={props.button.content}
								iconName={props.button.iconName}
								iconStyle={props.button.iconStyle}
								isDisabled={props.button.isDisabled}
								key={props.button.key}
								label={props.button.label}
								onClick={props.button.onClick}
								shape={ButtonShape.Soft}
								size={props.size}
							/> :
							<ButtonFloating
								colourSchemeStyle={props.colourScheme}
								content={props.button.content}
								isDisabled={props.button.isDisabled}
								key={props.button.key}
								label={props.button.label}
								onClick={props.button.onClick}
								shape={ButtonShape.Soft}
								size={props.size}
							/>
					)
			}
		</div>
	);
}

function ButtonMenu(props: {
	button: FloatingButtonGroupButtonMenu;
	colourScheme: ColourSchemeStyleStandard;
	position: IFloatingButtonGroupPosition;
	positionStrategy: PositionStrategyInternalCorner;
	size: ButtonSizeFloating;
}): ReactElement {

	const [showChildren, setShowChildren] = useState<boolean>(() => false);
	const showChildrenRef = useRef<boolean>(showChildren);
	const toggleShowChildren = useCallback(
		() => {
			const newValue: boolean = !showChildrenRef.current;
			setShowChildren(newValue);
			showChildrenRef.current = newValue;
		},
		[]
	);

	// For ordering buttons based on internal position so that the natural z-index prevents box shadows from overlapping with other buttons
	const handleButtonOrder = useCallback(
		(nodes: Array<ReactNode>) => {
			if ((
				props.positionStrategy === PositionStrategyInternal.TopLeft ||
				(props.button.orientation === Orientation.Horizontal && props.positionStrategy === PositionStrategyInternal.BottomLeft) ||
				(props.button.orientation === Orientation.Vertical && props.positionStrategy === PositionStrategyInternal.TopRight)
			)) return nodes;
			return nodes.reverse();
		},
		[props.positionStrategy, props.button.orientation]
	);

	return (
		<>
			{handleButtonOrder([
				<div
					key="floating-button-group-button"
					style={floatingButtonGroupButtonStyle(props.position)}
				>
					<ButtonFloating
						colourSchemeStyle={props.colourScheme}
						content={ButtonContent.Icon}
						iconName={showChildren ? FLOATING_BUTTON_GROUP_MENU_ICON_CLOSE : props.button.iconName}
						iconStyle={props.button.iconStyle}
						isDisabled={props.button.isDisabled}
						key={props.button.key}
						onClick={toggleShowChildren}
						shape={ButtonShape.Round}
						size={props.size}
					/>
				</div>,
				<div
					key="floating-button-group-menu-scroll"
					style={floatingButtonGroupMenuScrollStyle(props.position)}
				>
					<div
						key="floating-button-group-menu-children"
						style={floatingButtonGroupMenuChildrenStyle(props.position, props.positionStrategy, props.size, props.button.orientation)}
					>
						{(showChildren ? (props.button.children.map(child =>
							<div
								key={child.key}
								style={FLOATING_BUTTON_GROUP_MENU_CHILD_STYLE}
							>
								<ButtonMenuChild
									button={child}
									colourScheme={ColourSchemeStyleStandardToContainer[props.colourScheme]}
									size={props.size}
								/>
							</div>
						)) : [])}
					</div>
				</div>
			])
			}
		</>
	);
}

function ButtonMenuChild(props: {
	button: FloatingButtonGroupButtonMenuChild;
	colourScheme: ColourSchemeStyle;
	size: ButtonSizeFloating;
}): ReactElement {
	if (props.button.content === ButtonContent.IconLabel) {
		return <ButtonFloating
			colourSchemeStyle={props.colourScheme}
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			key={props.button.key}
			label={props.button.label}
			onClick={props.button.onClick}
			shape={ButtonShape.Round}
			size={props.size}
		/>
	}
	return <ButtonFloating
		colourSchemeStyle={props.colourScheme}
		content={props.button.content}
		isDisabled={props.button.isDisabled}
		key={props.button.key}
		label={props.button.label}
		onClick={props.button.onClick}
		shape={ButtonShape.Round}
		size={props.size}
	/>
}
