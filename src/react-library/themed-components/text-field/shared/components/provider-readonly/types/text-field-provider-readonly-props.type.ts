import type { PropsWithChildren } from "react";

import type { IStyle } from "@react-library/common";

import type { TextFieldStyle } from "../../../enums/text-field-style.type";

/**
 * Props for text field provider readonly component
 */
export type TextFieldProviderReadonlyProps = (
	PropsWithChildren &
	IStyle<TextFieldStyle>
);
