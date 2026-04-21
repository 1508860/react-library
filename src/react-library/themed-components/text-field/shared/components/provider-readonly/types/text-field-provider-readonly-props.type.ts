import type { PropsWithChildren } from "react";

import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";

/**
 * Props for text field provider readonly component
 */
export type TextFieldProviderReadonlyProps = (
	PropsWithChildren &
	TextFieldPropsStyle
);
