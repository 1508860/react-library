import type { PropsWithChildren } from "react";

import type { IStyle } from "@react-library/common";

import type { TextFieldStyle } from "../../../enums/text-field-style.type";

/**
 * Props for text field input container component
 */
export type TextFieldInputContainerProps = (
	PropsWithChildren &
	IStyle<TextFieldStyle>
);
