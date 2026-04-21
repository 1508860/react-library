import type {
	IIsDisabled,
	IIsRequired,
	ILabel,
	ILeadingIconName,
	IMaxWidth,
	IMinWidth,
	IName,
	IStyle,
	ISupportingText,
	IWidth,
	Size
} from "@react-library/common";

import type { TextFieldStyle } from "../enums/text-field-style.type";

import type { TextFieldLeadingIcon } from "./text-field-leading-icon.type";

/**
 * Common text field props that are shared between all content values
 * Note: Extends {@link TextFieldCommonPropsReadonly}
 */
export type TextFieldCommonProps = (
	Partial<IIsDisabled> &
	Partial<IIsRequired<boolean>> &
	Partial<ILeadingIconName<TextFieldLeadingIcon>> &
	Partial<ISupportingText<string>> &
	TextFieldCommonPropsReadonly
);

/**
 * Common readonly text field props that are shared between all content values
 */
export type TextFieldCommonPropsReadonly = (
	ILabel<string> &
	Partial<IMaxWidth<Size>> &
	Partial<IMinWidth<Size>> &
	IName<string> &
	IStyle<TextFieldStyle> &
	Partial<IWidth<Size>>
);
