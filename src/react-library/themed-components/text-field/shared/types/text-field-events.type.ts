import type {
	Callback,
	CallbackWithParameter,
	IOnBlur,
	IOnFocus,
	IOnIsErrored,
	IOnMouseEnter,
	IOnMouseLeave
} from "@react-library/common";

/**
 * Type for callback events for 
 */
export type TextFieldEvents = (
	IOnBlur<Callback<void>> &
	IOnFocus<Callback<void>> &
	IOnIsErrored<CallbackWithParameter<boolean, void>> &
	IOnMouseEnter<Element> &
	IOnMouseLeave<Element>
);
