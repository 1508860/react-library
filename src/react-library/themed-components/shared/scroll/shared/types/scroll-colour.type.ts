
import type {
	Colour,
	IBackgroundColour,
	IScrollbarBackgroundColour,
	IScrollbarColour
} from "@react-library/common";

/**
 * Describes colour props for the scroll component
 */
export type ScrollColour = (
	Partial<IBackgroundColour<Colour>> &
	Partial<IScrollbarBackgroundColour<Colour>> &
	IScrollbarColour<Colour>
);
