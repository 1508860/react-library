import type { PropsWithChildren } from "react";

import type { IIsDisabled, IProps, IStyle, IUseIsPopulatedState } from "@react-library/common";

import type { TextFieldStyle } from "../../../enums/text-field-style.type";
import type { UseTextFieldIsPopulatedState } from "../../../types/use-text-field-is-populated-state.type";

/**
 * Props for text field provider component
 */
export type TextFieldProviderProps<TProps> = (
	IIsDisabled &
	IProps<TProps> &
	PropsWithChildren &
	IStyle<TextFieldStyle> &
	IUseIsPopulatedState<UseTextFieldIsPopulatedState<TProps>>
);
