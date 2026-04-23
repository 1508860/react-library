import type {
	IInputHeight,
	IInputMaxHeight,
	IInputMinHeight,
	Size
} from "@react-library/common";

/**
 * Text field props relating to the height of a textarea
 */
export type TextFieldPropsTextareaHeight = (
	Partial<IInputHeight<Size>> &
	Partial<IInputMaxHeight<Size>> &
	Partial<IInputMinHeight<Size>>
);
