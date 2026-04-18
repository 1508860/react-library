import type { PropsWithChildren } from "react";

import type { ICommon } from "@react-library/common";

import type { TextFieldCommonProps } from "../../../types/text-field-common-props.type";

/**
 * Props for text field container component
 */
export type TextFieldContainerProps = (
	ICommon<TextFieldCommonProps> &
	PropsWithChildren
);
