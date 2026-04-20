import type { CallbackWithParameter } from "@react-library/common";
import type { TextFieldIsPopulatedState } from "./text-field-is-populated-state.type";

/**
 * Text field component is populated state hook callback
 */
export type UseTextFieldIsPopulatedState<TProps> = CallbackWithParameter<TProps, TextFieldIsPopulatedState>;
