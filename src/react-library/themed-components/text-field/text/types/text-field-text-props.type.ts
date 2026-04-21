import type {
	CallbackWithParameter,
	IDefaultText,
	IOnValueChange,
	IValue
} from "@react-library/common";

import type { TextFieldCommonProps } from "../../shared/types/text-field-common-props.type";
import type { TextFieldExtraTextProps } from "../../shared/types/text-field-extra-text-props.type";
import type { TextFieldValidationTextProps } from "../../shared/types/text-field-validation-text-props.type";

/**
 * Props for text field text component
 */
export type TextFieldTextProps = (
	Partial<IDefaultText<string | undefined>> &
	IOnValueChange<CallbackWithParameter<(string | undefined), void>> &
	TextFieldCommonProps &
	TextFieldExtraTextProps &
	TextFieldValidationTextProps &
	IValue<string | undefined>
);
