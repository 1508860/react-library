import type { ILeft, IRight } from "@react-library/common";

import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";
import type { TextFieldSupportingTextConfig } from "../../../types/text-field-supporting-text-config.type";

/**
 * Props for text field supporting text component
 */
export type TextFieldSupportingTextProps = (
	Partial<ILeft<TextFieldSupportingTextConfig>> &
	Partial<IRight<TextFieldSupportingTextConfig>> &
	TextFieldPropsStyle
);
