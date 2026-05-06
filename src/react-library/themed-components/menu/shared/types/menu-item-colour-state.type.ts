import type {
	Colour,
	IBackground,
	IHover,
	IIcon,
	IPulse,
	ISupportingText,
	IText,
	ITitle
} from "@react-library/common";

/**
 * Describes type for checkbox colour state
 */
export type MenuItemColourState = (
	IBackground<Colour | undefined> &
	IHover<Colour> &
	IIcon<Colour> &
	IPulse<Colour> &
	ISupportingText<Colour> &
	IText<Colour> &
	ITitle<Colour>
);
