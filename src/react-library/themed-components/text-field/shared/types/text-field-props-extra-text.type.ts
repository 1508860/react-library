import type {
	IExtraText,
	IExtraTextPosition
} from "@react-library/common";

import type { TextFieldExtraTextPosition } from "../enums/text-field-extra-text-position.type";

type TextFieldPropsExtraTextBase<TTextFieldExtraTextPosition extends TextFieldExtraTextPosition> = (
	IExtraTextPosition<TTextFieldExtraTextPosition>
);

/**
 *  Props for text field component for extra text at the end of the input
 */
export type TextFieldPropsExtraTextEnd = (
	IExtraText<string> &
	TextFieldPropsExtraTextBase<typeof TextFieldExtraTextPosition.End>
);

/**
 *  Props for text field component for no extra text in the input
 */
export type TextFieldPropsExtraTextNone = (
	TextFieldPropsExtraTextBase<typeof TextFieldExtraTextPosition.None>
);

/**
 *  Props for text field component for extra text at the start of the input
 */
export type TextFieldPropsExtraTextStart = (
	IExtraText<string> &
	TextFieldPropsExtraTextBase<typeof TextFieldExtraTextPosition.Start>
);

/**
 * Props for text field component content
 */
export type TextFieldPropsExtraText = (
	TextFieldPropsExtraTextEnd |
	TextFieldPropsExtraTextNone |
	TextFieldPropsExtraTextStart
);
