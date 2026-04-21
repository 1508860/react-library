import type { TextFieldPropsInputReadonly } from "../../../types/text-field-props-input-readonly.type";
import type { TextFieldPropsIsRequired } from "../../../types/text-field-props-is-required.type";
import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";

/**
 * Props for text field input label component
 */
export type TextFieldInputLabelProps = (
	TextFieldPropsInputReadonly &
	TextFieldPropsIsRequired &
	TextFieldPropsStyle
);
