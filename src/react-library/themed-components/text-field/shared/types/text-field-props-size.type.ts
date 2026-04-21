import type {
	IMaxWidth,
	IMinWidth,
	IWidth,
	Size
} from "@react-library/common";

/**
 * Text field props relating to size
 */
export type TextFieldPropsSize = (
	Partial<IMaxWidth<Size>> &
	Partial<IMinWidth<Size>> &
	Partial<IWidth<Size>>
);
