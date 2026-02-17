import type { Property } from "csstype";

import type {
	Colour,
	IBackgroundColour,
	IBorderColour,
	IBoxShadow,
	IDisabledOpacity,
	IHoverOpacity,
	IOnColour,
	IPulseOpacity,
	StyleOpacity
} from "@react-library/common";

/**
 * Describes type for button colour state
 */
export type ButtonColourState = (
	Partial<IBackgroundColour<Colour>> &
	Partial<IBorderColour<Colour>> &
	Partial<IBoxShadow<Property.BoxShadow>> &
	IDisabledOpacity<StyleOpacity> &
	IHoverOpacity<StyleOpacity> &
	IOnColour<Colour> &
	IPulseOpacity<StyleOpacity>
);
