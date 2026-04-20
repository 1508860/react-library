import type {
	IExtraText,
	IExtraTextPosition
} from "@react-library/common";

import type { TextFieldExtraTextPosition } from "../enums/text-field-extra-text-position.type";

type TextFieldExtraTextPropsBase<TTextFieldExtraTextPosition extends TextFieldExtraTextPosition> = (
	IExtraTextPosition<TTextFieldExtraTextPosition>
);

/**
 *  Props for text field component for extra text at the end of the input
 */
export type TextFieldExtraTextPropsEnd = (
	IExtraText<string> &
	TextFieldExtraTextPropsBase<typeof TextFieldExtraTextPosition.End>
);

/**
 *  Props for text field component for no extra text in the input
 */
export type TextFieldExtraTextPropsNone = (
	TextFieldExtraTextPropsBase<typeof TextFieldExtraTextPosition.None>
);

/**
 *  Props for text field component for extra text at the start of the input
 */
export type TextFieldExtraTextPropsStart = (
	IExtraText<string> &
	TextFieldExtraTextPropsBase<typeof TextFieldExtraTextPosition.Start>
);

/**
 * Props for text field component content
 */
export type TextFieldExtraTextProps = (
	TextFieldExtraTextPropsEnd |
	TextFieldExtraTextPropsNone |
	TextFieldExtraTextPropsStart
);
