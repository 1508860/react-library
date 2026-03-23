import type { CSSProperties } from "react";

import {
	Orientation,
	PositionStrategyInternal,
	type SizePx
} from "@react-library/common";

import {
	BUTTON_FLOATING_PROPERTY_MAP,
	ButtonContent,
	type ButtonSizeFloating
} from "../../../../button";

import type { FloatingButtonGroupOrientation } from "../../../types/floating-button-group-orientation.type";
import type { FloatingButtonGroupPositionStrategy } from "../../../types/floating-button-group-position-strategy.type";
import type { FloatingButtonGroupPosition } from "../../../types/floating-button-group-position.type";

/**
 * Resolve floating button group menu children style based on parameters
 * @param position
 * @param positionStrategy
 * @param buttonSize
 * @param orientation
 */
export function floatingButtonGroupMenuChildrenStyle(
	position: FloatingButtonGroupPosition,
	positionStrategy: FloatingButtonGroupPositionStrategy,
	buttonSize: ButtonSizeFloating,
	orientation: FloatingButtonGroupOrientation
): CSSProperties {

	let paddingBottom: SizePx = 0;
	let paddingTop: SizePx = 0;
	let paddingLeft: SizePx = 0;
	let paddingRight: SizePx = 0;

	switch (orientation) {
		case Orientation.Horizontal:
			{
				const buttonPaddingSize: SizePx = BUTTON_FLOATING_PROPERTY_MAP.size[buttonSize].content[ButtonContent.Icon].iconWidth ?? 0;
				switch (positionStrategy) {
					case PositionStrategyInternal.BottomLeft:
					case PositionStrategyInternal.TopLeft:
						paddingLeft = buttonPaddingSize + position.gap;
						break;
					case PositionStrategyInternal.BottomRight:
					case PositionStrategyInternal.TopRight:
						paddingRight = buttonPaddingSize + position.gap;
						break;
				}
				break;
			}
		case Orientation.Vertical:
			{
				const buttonPaddingSize: SizePx = BUTTON_FLOATING_PROPERTY_MAP.size[buttonSize].height;
				switch (positionStrategy) {
					case PositionStrategyInternal.BottomLeft:
					case PositionStrategyInternal.BottomRight:
						paddingBottom = buttonPaddingSize + position.gap;
						break;
					case PositionStrategyInternal.TopLeft:
					case PositionStrategyInternal.TopRight:
						paddingTop = buttonPaddingSize + position.gap;
						break;
				}
				break;
			}
	}

	return {
		alignItems: position.alignItems,
		display: "inline-flex",
		flexDirection: position.flexDirection,
		gap: position.gap,
		paddingBottom: paddingBottom + position.padding,
		paddingLeft: paddingLeft + position.padding,
		paddingRight: paddingRight + position.padding,
		paddingTop: paddingTop + position.padding,
		position: "relative"
	};
}
