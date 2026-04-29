import type {
	Colour,
	IHoverColour,
	IIconColour,
	ILabelColour,
	IPulseColour
} from "@react-library/common";

/**
 * Describes type for radio button colour state
 */
export type RadioButtonColourState = (
	IHoverColour<Colour> &
	IIconColour<Colour> &
	ILabelColour<Colour> &
	IPulseColour<Colour>
);
