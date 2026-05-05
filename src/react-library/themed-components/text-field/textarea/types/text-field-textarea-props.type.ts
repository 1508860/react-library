import type { CallbackWithParameter, IOnValueChange, IValue } from "@react-library/common";

import type { TextFieldPropsId } from "../../shared/types/text-field-props-id.type";
import type { TextFieldPropsIsDisabled } from "../../shared/types/text-field-props-is-disabled.type";
import type { TextFieldPropsIsRequired } from "../../shared/types/text-field-props-is-required.type";
import type { TextFieldPropsLabel } from "../../shared/types/text-field-props-label.type";
import type { TextFieldPropsName } from "../../shared/types/text-field-props-name.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";
import type { TextFieldPropsSupportingText } from "../../shared/types/text-field-props-supporting-text.type";
import type { TextFieldPropsTextareaHeight } from "../../shared/types/text-field-props-textarea-height.type";
import type { TextFieldPropsValidationTextarea } from "../../shared/types/text-field-props-validation-textarea.type";

/**
 * Props for text field textarea component
 */
export type TextFieldTextareaProps = (
	IOnValueChange<CallbackWithParameter<(string | undefined), void>> &
	TextFieldPropsId &
	TextFieldPropsIsDisabled &
	TextFieldPropsIsRequired &
	TextFieldPropsLabel &
	TextFieldPropsName &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsSupportingText &
	TextFieldPropsTextareaHeight &
	TextFieldPropsValidationTextarea &
	IValue<string | undefined>
);
