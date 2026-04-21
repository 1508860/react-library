import type {
	CallbackWithParameter,
	IDefaultText,
	IOnValueChange,
	IValue
} from "@react-library/common";

import type { TextFieldCommonProps } from "../../shared/types/text-field-common-props.type";
import type { TextFieldPropsExtraText } from "../../shared/types/text-field-props-extra-text.type";
import type { TextFieldPropsValidationText } from "../../shared/types/text-field-props-validation-text.type";

/**
 * Props for text field text component
 */
export type TextFieldTextProps = (
	Partial<IDefaultText<string | undefined>> &
	IOnValueChange<CallbackWithParameter<(string | undefined), void>> &
	TextFieldCommonProps &
	TextFieldPropsExtraText &
	TextFieldPropsValidationText &
	IValue<string | undefined>
);
