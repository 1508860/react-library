import type { IBoxShadow, IColour, IRadius, IStyle, IWidth } from "@react-library/common";

import type { TransitionBorderRadiusBorderBoxShadow } from "./transition-border-radius-border-box-shadow.type";
import type { TransitionBorderRadiusBorderColour } from "./transition-border-radius-border-colour.type";
import type { TransitionBorderRadiusBorderStyle } from "./transition-border-radius-border-style.type";
import type { TransitionBorderRadiusBorderWidth } from "./transition-border-radius-border-width.type";
import type { TransitionBorderRadiusUnits } from "./transition-border-radius-units.type";

/**
 * Transition border radius component style for all sides of the element
 */
export type TransitionBorderRadiusStyleAll = (
	Partial<IBoxShadow<TransitionBorderRadiusBorderBoxShadow>> &
	Partial<IColour<TransitionBorderRadiusBorderColour>> &
	Partial<IRadius<TransitionBorderRadiusUnits>> &
	Partial<IStyle<TransitionBorderRadiusBorderStyle>> &
	Partial<IWidth<TransitionBorderRadiusBorderWidth>>
);
