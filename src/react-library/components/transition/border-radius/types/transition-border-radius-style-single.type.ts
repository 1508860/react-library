import type { Property } from "csstype";

import type {
	Colour,
	IBottom,
	IBoxShadow,
	IColour,
	ILeft,
	ILeftRadius,
	IRight,
	IRightRadius,
	IStyle,
	ITop,
	IWidth,
	Size
} from "@react-library/common";

import type { TransitionBorderRadiusUnits } from "./transition-border-radius-units.type";

/**
 * Transition border radius component style for the single scope
 */
export type TransitionBorderRadiusStyleSingle = (
	Partial<IBoxShadow<Property.BoxShadow>> &
	Partial<IBottom<Partial<TransitionBorderRadiusStyleSingleBottom>>> &
	Partial<ILeft<Partial<TransitionBorderRadiusStyleSingleLeft>>> &
	Partial<IRight<Partial<TransitionBorderRadiusStyleSingleRight>>> &
	Partial<ITop<Partial<TransitionBorderRadiusStyleSingleTop>>>
);

/**
 * Transition border radius component style for the bottom side of the element
 */
export type TransitionBorderRadiusStyleSingleBottom = (
	IColour<Colour> &
	ILeftRadius<TransitionBorderRadiusUnits> &
	IRightRadius<TransitionBorderRadiusUnits> &
	IStyle<Property.BorderBottomStyle> &
	IWidth<Size>
);

/**
 * Transition border radius component style for the left side of the element
 */
export type TransitionBorderRadiusStyleSingleLeft = (
	IColour<Colour> &
	IStyle<Property.BorderLeftStyle> &
	IWidth<Size>
);

/**
 * Transition border radius component style for the right side of the element
 */
export type TransitionBorderRadiusStyleSingleRight = (
	IColour<Colour> &
	IStyle<Property.BorderRightStyle> &
	IWidth<Size>
);

/**
 * Transition border radius component style for the top side of the element
 */
export type TransitionBorderRadiusStyleSingleTop = (
	IColour<Colour> &
	ILeftRadius<TransitionBorderRadiusUnits> &
	IRightRadius<TransitionBorderRadiusUnits> &
	IStyle<Property.BorderTopStyle> &
	IWidth<Size>
);
