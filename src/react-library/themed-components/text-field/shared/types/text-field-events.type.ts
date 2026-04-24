import type {
	Callback,
	CallbackWithParameter,
	IOnBlur,
	IOnFocus,
	IOnHideContent,
	IOnIsErrored,
	IOnMouseEnter,
	IOnMouseLeave,
	IOnShowContent,
} from "@react-library/common";

/**
 * Type for callback events for 
 */
export type TextFieldEvents = (
	IOnBlur<Callback<void>> &
	IOnFocus<Callback<void>> &
	IOnHideContent<Callback<void>> &
	IOnIsErrored<CallbackWithParameter<boolean, void>> &
	IOnMouseEnter<Element> &
	IOnMouseLeave<Element> &
	IOnShowContent<Callback<void>>
);
