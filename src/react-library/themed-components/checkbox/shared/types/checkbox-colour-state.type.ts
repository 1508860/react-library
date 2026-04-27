import type {
	Colour,
	IBackgroundColour,
	IBorderColour,
	IHoverColour,
	IIconColour,
	ILabelColour,
	IPulseColour
} from "@react-library/common";

/**
 * Describes type for checkbox colour state
 */
export type CheckboxColourState = (
	IBackgroundColour<Colour | undefined> &
	IBorderColour<Colour | undefined> &
	IHoverColour<Colour> &
	IIconColour<Colour> &
	ILabelColour<Colour> &
	IPulseColour<Colour>
);
