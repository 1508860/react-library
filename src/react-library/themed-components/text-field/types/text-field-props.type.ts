import type {
	CallbackWithParameter,
	IContent,
	IDefaultText,
	IIsPassword,
	IOnValueChange,
	IValue
} from "@react-library/common";

import type { TextFieldContent } from "../enums/text-field-content.type";

import type { TextFieldExtraTextProps } from "./text-field-extra-text-props.type";
import type { TextFieldCommonProps } from "./text-field-common-props.type";

type TextFieldPropsBase<TTextFieldContent extends TextFieldContent> = (
	IContent<TTextFieldContent> &
	TextFieldCommonProps
);

/**
 *  Currency props for text field component content
 */
export type TextFieldPropsCurrency = (
	TextFieldPropsBase<typeof TextFieldContent.Currency>
);

/**
 *  Number props for text field component content
 */
export type TextFieldPropsNumber = (
	TextFieldPropsBase<typeof TextFieldContent.Number>
);

/**
 *  Text props for text field component content
 */
export type TextFieldPropsText = (
	Partial<IDefaultText<string | undefined>> &
	Partial<IIsPassword<boolean>> &
	IOnValueChange<CallbackWithParameter<(string | undefined), void>> &
	TextFieldPropsBase<typeof TextFieldContent.Text> &
	TextFieldExtraTextProps &
	IValue<string | undefined>
);

/**
 *  Text area props for text field component content
 */
export type TextFieldPropsTextArea = (
	TextFieldPropsBase<typeof TextFieldContent.TextArea>
);

/**
 * Props for text field component content
 */
export type TextFieldProps = (
	TextFieldPropsCurrency |
	TextFieldPropsNumber |
	TextFieldPropsText |
	TextFieldPropsTextArea
);
