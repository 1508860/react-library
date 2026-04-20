
import type {
	Colour,
	IBackground,
	IBorder,
	ICaret,
	IInputText,
	IIsErrored,
	ILabel,
	ILeadingIcon,
	IStyle,
	ISupportingText,
	IText,
	ITrailingIcon
} from "@react-library/common";

/**
 * Describes values for text field colours
 */
export type TextFieldColourState = (
	IStyle<TextFieldColourStateStyle> &
	ISupportingText<TextFieldColourStateSupportingText>
);

/**
 * Describes values for text field style colours
 */
export type TextFieldColourStateStyle = (
	Partial<IBackground<Colour>> &
	IBorder<Colour> &
	Partial<ICaret<Colour>> &
	IInputText<Colour> &
	ILabel<Colour> &
	ILeadingIcon<Colour> &
	IText<Colour> &
	ITrailingIcon<Colour>
);

/**
 * Describes values for text field supporting text colours
 */
export type TextFieldColourStateSupportingText = (
	IIsErrored<Record<`${boolean}`, Colour>>
);
