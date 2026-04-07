import type {
	Colour,
	IBackgroundColour,
	IHeight,
	IMaxHeight,
	IMaxWidth,
	IMinHeight,
	IMinWidth,
	IWidth,
	Size
} from "@react-library/common";


/**
 * Modal content config
 */
export type ModalContentConfig = (
	Partial<IBackgroundColour<Colour>> &
	Partial<IHeight<Size>> &
	Partial<IMaxHeight<Size>> &
	Partial<IMaxWidth<Size>> &
	Partial<IMinHeight<Size>> &
	Partial<IMinWidth<Size>> &
	Partial<IWidth<Size>>
);
