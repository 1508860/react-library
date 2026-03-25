import type { Property } from "csstype";

import type { Colour, IBoxShadow, IColour, IRadius, IStyle, IWidth, Size } from "@react-library/common";

import type { TransitionBorderRadiusUnits } from "./transition-border-radius-units.type";

/**
 * Transition border radius component style for all sides of the element
 */
export type TransitionBorderRadiusStyleAll = (
	Partial<IBoxShadow<Property.BoxShadow>> &
	Partial<IColour<Colour>> &
	Partial<IRadius<TransitionBorderRadiusUnits>> &
	Partial<IStyle<Property.BorderStyle>> &
	Partial<IWidth<Size>>
);
