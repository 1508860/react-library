
import type {
	Colour,
	IBackground,
	IBorder,
	ICaret,
	IInputText,
	ILabel,
	ILeadingIcon,
	ISupportingText,
	IText,
	ITrailingIcon
} from "@react-library/common";

/**
 * Describes values for text field style colours
 */
export type TextFieldColourState = (
	Partial<IBackground<Colour>> &
	IBorder<Colour> &
	Partial<ICaret<Colour>> &
	IInputText<Colour> &
	ILabel<Colour> &
	ILeadingIcon<Colour> &
	ISupportingText<Colour> &
	IText<Colour> &
	ITrailingIcon<Colour>
);
