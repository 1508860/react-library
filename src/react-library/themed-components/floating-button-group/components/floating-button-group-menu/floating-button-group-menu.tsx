import { useState, useCallback, type ReactNode } from "react";

import { PositionStrategyInternal, Orientation } from "@react-library/common";

import { ButtonFloating, ButtonContent, ButtonShape } from "../../../button";

import { FLOATING_BUTTON_GROUP_MENU_ICON_CLOSE } from "../../constants/floating-button-group-menu-icon.const";
import { useFloatingButtonGroupPositionContext } from "../../hooks/virtual-scroll-item-unregister-context.hook";

import { FloatingButtonGroupButtonContainer } from "../floating-button-group-button-container";
import { FloatingButtonGroupMenuItem } from "../floating-button-group-menu-item";

import { FLOATING_BUTTON_GROUP_MENU_CHILD_STYLE } from "./styles/floating-button-group-menu-child-style.const";
import { floatingButtonGroupMenuChildrenStyle } from "./styles/floating-button-group-menu-children-style.function";
import { floatingButtonGroupMenuScrollStyle } from "./styles/floating-button-group-menu-scroll-style.function";
import type { FloatingButtonGroupMenuProps } from "./types/floating-button-group-menu-props.type";

/**
 * Floating button group menu component
 * @param props
 */
export function FloatingButtonGroupMenu(props: FloatingButtonGroupMenuProps) {

	const position = useFloatingButtonGroupPositionContext();

	const [showChildren, setShowChildren] = useState<boolean>(() => false);
	const toggleShowChildren = useCallback(() => setShowChildren((prev) => !prev), []);

	// For ordering buttons based on internal position so that the natural z-index prevents box shadows from overlapping with other buttons
	const handleButtonOrder = useCallback(
		(nodes: Array<ReactNode>) => {
			if ((
				props.positionStrategy === PositionStrategyInternal.TopLeft ||
				(props.orientation === Orientation.Horizontal && props.positionStrategy === PositionStrategyInternal.BottomLeft) ||
				(props.orientation === Orientation.Vertical && props.positionStrategy === PositionStrategyInternal.TopRight)
			)) return nodes;
			return nodes.reverse();
		},
		[props.positionStrategy, props.orientation]
	);

	return (
		<>
			{handleButtonOrder([
				<FloatingButtonGroupButtonContainer key="floating-button-group-button">
					<ButtonFloating
						colourSchemeStyle={props.colourSchemeStyle}
						content={ButtonContent.Icon}
						iconName={showChildren ? FLOATING_BUTTON_GROUP_MENU_ICON_CLOSE : props.iconName}
						iconStyle={props.iconStyle}
						isDisabled={props.isDisabled}
						onClick={toggleShowChildren}
						shape={showChildren ? ButtonShape.Round : ButtonShape.Soft}
						size={props.size}
					/>
				</FloatingButtonGroupButtonContainer>,
				<div
					key="floating-button-group-menu-scroll"
					style={floatingButtonGroupMenuScrollStyle(position)}
				>
					<div style={floatingButtonGroupMenuChildrenStyle(position, props.positionStrategy, props.size, props.orientation)}>
						{(showChildren ? (props.children.map(child =>
							<div
								key={child.key}
								style={FLOATING_BUTTON_GROUP_MENU_CHILD_STYLE}
							>
								<FloatingButtonGroupMenuItem
									colourSchemeStyle={props.colourSchemeStyle}
									content={child.content}
									isDisabled={child.isDisabled}
									onClick={child.onClick}
									size={props.size}
								/>
							</div>
						)) : [])}
					</div>
				</div>
			])}
		</>
	);
}
