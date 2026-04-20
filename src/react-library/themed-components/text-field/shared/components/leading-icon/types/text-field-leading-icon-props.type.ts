import type { ILeadingIconName, IStyle } from "@react-library/common";

import type { TextFieldStyle } from "../../../enums/text-field-style.type";
import type { TextFieldLeadingIcon } from "../../../types/text-field-leading-icon.type";

/**
 * Props for text field leading icon component
 */
export type TextFieldLeadingIconProps = (
	Partial<ILeadingIconName<TextFieldLeadingIcon>> &
	IStyle<TextFieldStyle>
);
