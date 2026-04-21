import type { PropsWithChildren } from "react";

import type { ICommon } from "@react-library/common";

import type { TextFieldCommonPropsReadonly } from "../../../types/text-field-common-props.type";

/**
 * Props for text field inner container component
 */
export type TextFieldInnerContainerProps = (
	ICommon<TextFieldCommonPropsReadonly> &
	PropsWithChildren
);
