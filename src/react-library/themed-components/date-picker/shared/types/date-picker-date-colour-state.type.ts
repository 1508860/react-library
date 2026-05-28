import type {
	Colour,
	IBackground,
	IBorderColour,
	IFont,
	IHover,
	IPulse
} from "@react-library/common";

/**
 * Describes values for date picker component date colours
 */
export type DatePickerDateColourState = (
	IBackground<Colour | undefined> &
	IBorderColour<Colour | undefined> &
	IFont<Colour> &
	IHover<Colour> &
	IPulse<Colour>
);
