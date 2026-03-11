import type { Property } from "csstype";

import type {
	Colour,
	IBackgroundColour,
	IBorderColour,
	IBoxShadow,
	IDisabledColour,
	IHoverColour,
	IOnColour,
	IPulseColour
} from "@react-library/common";

/**
 * Describes type for button colour state
 */
export type ButtonColourState = (
	Partial<IBackgroundColour<Colour>> &
	Partial<IBorderColour<Colour>> &
	Partial<IBoxShadow<Property.BoxShadow>> &
	IDisabledColour<Colour> &
	IHoverColour<Colour> &
	IOnColour<Colour> &
	IPulseColour<Colour>
);
