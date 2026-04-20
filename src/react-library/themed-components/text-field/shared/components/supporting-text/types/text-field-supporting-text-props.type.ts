import type { ILeft, IRight, IStyle } from "@react-library/common";

import type { TextFieldStyle } from "../../../enums/text-field-style.type";
import type { TextFieldSupportingTextConfig } from "../../../types/text-field-supporting-text-config.type";

/**
 * Props for text field supporting text component
 */
export type TextFieldSupportingTextProps = (
	Partial<ILeft<TextFieldSupportingTextConfig>> &
	Partial<IRight<TextFieldSupportingTextConfig>> &
	IStyle<TextFieldStyle>
);
