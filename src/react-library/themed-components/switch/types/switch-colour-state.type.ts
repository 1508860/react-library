import type {
	Colour,
	IBackgroundColour,
	IBorderColour,
	IHoverColour,
	IIconColour,
	ILabelColour,
	IThumbColour
} from "@react-library/common";

/**
 * Describes type for switch colour state
 */
export type SwitchColourState = (
	IBackgroundColour<Colour> &
	IBorderColour<Colour> &
	IHoverColour<Colour> &
	IIconColour<Colour> &
	ILabelColour<Colour> &
	IThumbColour<Colour>
);
