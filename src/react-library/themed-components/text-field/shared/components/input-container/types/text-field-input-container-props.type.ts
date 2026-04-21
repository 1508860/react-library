import type { PropsWithChildren } from "react";

import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";

/**
 * Props for text field input container component
 */
export type TextFieldInputContainerProps = (
	PropsWithChildren &
	TextFieldPropsStyle
);
