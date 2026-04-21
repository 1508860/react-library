import type {
	CallbackWithParameter,
	IOnValueChange,
	IValue
} from "@react-library/common";

import type { TextFieldPropsInputReadonly } from "../../shared/types/text-field-props-input-readonly.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";
import type { TextFieldPropsValidationPassword } from "../../shared/types/text-field-props-validation-password.type";

/**
 * Props for text field password component
 */
export type TextFieldPasswordProps = (
	IOnValueChange<CallbackWithParameter<(string | undefined), void>> &
	TextFieldPropsInputReadonly &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsValidationPassword &
	IValue<string | undefined>
);
