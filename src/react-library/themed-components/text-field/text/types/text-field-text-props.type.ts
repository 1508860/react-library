import type {
	CallbackWithParameter,
	IDefaultText,
	IIsPassword,
	ILabel,
	IOnValueChange,
	IValue
} from "@react-library/common";

import type { TextFieldCommonProps } from "../../shared/types/text-field-common-props.type";
import type { TextFieldExtraTextProps } from "../../shared/types/text-field-extra-text-props.type";

/**
 * Props for text field text component
 */
export type TextFieldTextProps = (
	Partial<IDefaultText<string | undefined>> &
	Partial<IIsPassword<boolean>> &
	ILabel<string> &
	IOnValueChange<CallbackWithParameter<(string | undefined), void>> &
	TextFieldCommonProps &
	TextFieldExtraTextProps &
	IValue<string | undefined>
);
