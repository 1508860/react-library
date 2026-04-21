import type { TextFieldPropsSetShowContent } from "../../../types/text-field-props-set-show-content.type";
import type { TextFieldPropsShowContent } from "../../../types/text-field-props-show-content.type";
import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";

/**
 * Props for text field icon show content component
 */
export type TextFieldIconShowContentProps = (
	TextFieldPropsSetShowContent &
	TextFieldPropsShowContent &
	TextFieldPropsStyle
);
