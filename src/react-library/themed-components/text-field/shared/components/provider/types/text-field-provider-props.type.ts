import type { PropsWithChildren } from "react";

import type { TextFieldPropsIsDisabled } from "../../../types/text-field-props-is-disabled.type";
import type { TextFieldPropsStyle } from "../../../types/text-field-props-style.type";
import type { TextFieldPropsUseIsPopulatedState } from "../../../types/text-field-props-use-is-populated-state.type";

/**
 * Props for text field provider component
 */
export type TextFieldProviderProps<TProps> = (
	PropsWithChildren &
	TextFieldPropsIsDisabled &
	TextFieldPropsStyle &
	TextFieldPropsUseIsPopulatedState<TProps>
);
