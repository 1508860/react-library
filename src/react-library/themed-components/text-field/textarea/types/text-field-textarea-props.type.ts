import type {
	CallbackWithParameter,
	IInputHeight,
	IInputMaxHeight,
	IInputMinHeight,
	IOnValueChange,
	IValue,
	Size
} from "@react-library/common";

import type { TextFieldPropsInputReadonly } from "../../shared/types/text-field-props-input-readonly.type";
import type { TextFieldPropsIsDisabled } from "../../shared/types/text-field-props-is-disabled.type";
import type { TextFieldPropsIsRequired } from "../../shared/types/text-field-props-is-required.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";
import type { TextFieldPropsSupportingText } from "../../shared/types/text-field-props-supporting-text.type";
import type { TextFieldPropsValidationTextarea } from "../../shared/types/text-field-props-validation-textarea.type";

/**
 * Props for text field textarea component
 */
export type TextFieldTextareaProps = (
	Partial<IInputHeight<Size>> &
	Partial<IInputMaxHeight<Size>> &
	Partial<IInputMinHeight<Size>> &
	IOnValueChange<CallbackWithParameter<(string | undefined), void>> &
	TextFieldPropsInputReadonly &
	TextFieldPropsIsDisabled &
	TextFieldPropsIsRequired &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsSupportingText &
	TextFieldPropsValidationTextarea &
	IValue<string | undefined>
);
