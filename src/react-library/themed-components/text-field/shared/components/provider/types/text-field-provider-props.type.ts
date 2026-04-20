import type { PropsWithChildren } from "react";

import type { IProps, IUseIsPopulatedState } from "@react-library/common";

import type { TextFieldCommonProps } from "../../../types/text-field-common-props.type";
import type { UseTextFieldIsPopulatedState } from "../../../types/use-text-field-is-populated-state.type";

/**
 * Props for text field provider component
 */
export type TextFieldProviderProps<TProps extends TextFieldCommonProps> = (
	IProps<TProps> &
	PropsWithChildren &
	IUseIsPopulatedState<UseTextFieldIsPopulatedState<TProps>>
);
