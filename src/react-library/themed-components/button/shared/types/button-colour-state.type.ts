import type { Property } from "csstype";

import type {
	Colour,
	IBoxShadow,
	IColour,
	IOpacity,
	PrefixKeys,
	StyleOpacity
} from "@react-library/common";

/**
 * Describes type for button colour state
 */
export type ButtonColourState = (
	Partial<IBoxShadow<Property.BoxShadow>> &
	Partial<PrefixKeys<IColour<Colour>, "background">> &
	Partial<PrefixKeys<IColour<Colour>, "border">> &
	PrefixKeys<IColour<Colour>, "on"> &
	PrefixKeys<IOpacity<StyleOpacity>, "disabled"> &
	PrefixKeys<IOpacity<StyleOpacity>, "hover"> &
	PrefixKeys<IOpacity<StyleOpacity>, "pulse">
);
