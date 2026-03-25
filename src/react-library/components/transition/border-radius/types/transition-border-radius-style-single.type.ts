import type {
	IBottom,
	IBoxShadow,
	IColour,
	ILeft,
	ILeftRadius,
	IRight,
	IRightRadius,
	IStyle,
	ITop,
	IWidth
} from "@react-library/common";

import type { TransitionBorderRadiusBorderBoxShadow } from "./transition-border-radius-border-box-shadow.type";
import type { TransitionBorderRadiusBorderColour } from "./transition-border-radius-border-colour.type";
import type {
	TransitionBorderRadiusBorderBottomStyle,
	TransitionBorderRadiusBorderLeftStyle,
	TransitionBorderRadiusBorderRightStyle,
	TransitionBorderRadiusBorderTopStyle
} from "./transition-border-radius-border-style.type";
import type { TransitionBorderRadiusBorderWidth } from "./transition-border-radius-border-width.type";
import type { TransitionBorderRadiusUnits } from "./transition-border-radius-units.type";

/**
 * Transition border radius component style for the single scope
 */
export type TransitionBorderRadiusStyleSingle = (
	Partial<IBoxShadow<TransitionBorderRadiusBorderBoxShadow>> &
	Partial<IBottom<Partial<TransitionBorderRadiusStyleSingleBottom>>> &
	Partial<ILeft<Partial<TransitionBorderRadiusStyleSingleLeft>>> &
	Partial<IRight<Partial<TransitionBorderRadiusStyleSingleRight>>> &
	Partial<ITop<Partial<TransitionBorderRadiusStyleSingleTop>>>
);

/**
 * Transition border radius component style for the bottom side of the element
 */
export type TransitionBorderRadiusStyleSingleBottom = (
	IColour<TransitionBorderRadiusBorderColour> &
	ILeftRadius<TransitionBorderRadiusUnits> &
	IRightRadius<TransitionBorderRadiusUnits> &
	IStyle<TransitionBorderRadiusBorderBottomStyle> &
	IWidth<TransitionBorderRadiusBorderWidth>
);

/**
 * Transition border radius component style for the left side of the element
 */
export type TransitionBorderRadiusStyleSingleLeft = (
	IColour<TransitionBorderRadiusBorderColour> &
	IStyle<TransitionBorderRadiusBorderLeftStyle> &
	IWidth<TransitionBorderRadiusBorderWidth>
);

/**
 * Transition border radius component style for the right side of the element
 */
export type TransitionBorderRadiusStyleSingleRight = (
	IColour<TransitionBorderRadiusBorderColour> &
	IStyle<TransitionBorderRadiusBorderRightStyle> &
	IWidth<TransitionBorderRadiusBorderWidth>
);

/**
 * Transition border radius component style for the top side of the element
 */
export type TransitionBorderRadiusStyleSingleTop = (
	IColour<TransitionBorderRadiusBorderColour> &
	ILeftRadius<TransitionBorderRadiusUnits> &
	IRightRadius<TransitionBorderRadiusUnits> &
	IStyle<TransitionBorderRadiusBorderTopStyle> &
	IWidth<TransitionBorderRadiusBorderWidth>
);
