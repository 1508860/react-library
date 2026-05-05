import type { TextFieldPropsId } from "../../../types/text-field-props-id.type";
import type { TextFieldPropsIsRequired } from "../../../types/text-field-props-is-required.type";
import type { TextFieldPropsLabel } from "../../../types/text-field-props-label.type";
import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";

/**
 * Props for text field input label component
 */
export type TextFieldInputLabelProps = (
	TextFieldPropsId &
	TextFieldPropsIsRequired &
	TextFieldPropsLabel &
	TextFieldPropsStyle
);
