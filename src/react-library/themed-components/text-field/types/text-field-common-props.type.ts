import type {
	IIsDisabled,
	IIsRequired,
	ILabel,
	ILeadingIconName,
	IMaxWidth,
	IMinWidth,
	IName,
	IStyle,
	IWidth,
	Size
} from "@react-library/common";

import type { TextFieldStyle } from "../enums/text-field-style.type";

import type { TextFieldLeadingIcon } from "./text-field-leading-icon.type";

/**
 * Common text field props that are shared between all content values
 */
export type TextFieldCommonProps = (
	Partial<IIsDisabled> &
	Partial<IIsRequired<boolean>> &
	ILabel<string> &
	Partial<ILeadingIconName<TextFieldLeadingIcon>> &
	Partial<IMaxWidth<Size>> &
	Partial<IMinWidth<Size>> &
	IName<string> &
	IStyle<TextFieldStyle> &
	Partial<IWidth<Size>>
);
