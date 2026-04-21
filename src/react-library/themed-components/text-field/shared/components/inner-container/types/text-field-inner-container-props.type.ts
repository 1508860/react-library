import type { PropsWithChildren } from "react";

import type { TextFieldPropsSize } from "../../../types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";

/**
 * Props for text field inner container component
 */
export type TextFieldInnerContainerProps = (
	TextFieldPropsSize &
	TextFieldPropsStyle &
	PropsWithChildren
);
