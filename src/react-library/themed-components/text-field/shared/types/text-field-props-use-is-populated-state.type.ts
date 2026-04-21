import type { IProps, IUseIsPopulatedState } from "@react-library/common";

import type { UseTextFieldIsPopulatedState } from "./use-text-field-is-populated-state.type";

/**
 * Text field props relating to the is populated hook
 */
export type TextFieldPropsUseIsPopulatedState<TProps> = (
	IProps<TProps> &
	IUseIsPopulatedState<UseTextFieldIsPopulatedState<TProps>>
);
