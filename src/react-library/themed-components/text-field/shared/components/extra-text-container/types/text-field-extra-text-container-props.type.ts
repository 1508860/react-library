import type { PropsWithChildren } from "react";

import type { IStyle } from "@react-library/common";

import type { TextFieldPropsExtraText } from "../../../types/text-field-props-extra-text.type";
import type { TextFieldStyle } from "../../../enums/text-field-style.type";

/**
 * Props for text field extra text container component
 */
export type TextFieldExtraTextContainerProps = (
	PropsWithChildren &
	IStyle<TextFieldStyle> &
	TextFieldPropsExtraText
);
