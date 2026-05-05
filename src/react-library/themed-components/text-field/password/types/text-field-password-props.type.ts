import type {
	CallbackWithParameter,
	IOnValueChange,
	IValue
} from "@react-library/common";

import type { TextFieldPropsId } from "../../shared/types/text-field-props-id.type";
import type { TextFieldPropsLabel } from "../../shared/types/text-field-props-label.type";
import type { TextFieldPropsName } from "../../shared/types/text-field-props-name.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";
import type { TextFieldPropsValidationPassword } from "../../shared/types/text-field-props-validation-password.type";

/**
 * Props for text field password component
 */
export type TextFieldPasswordProps = (
	IOnValueChange<CallbackWithParameter<(string | undefined), void>> &
	TextFieldPropsId &
	TextFieldPropsLabel &
	TextFieldPropsName &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsValidationPassword &
	IValue<string | undefined>
);
