import type {
	Callback,
	IOnBlur,
	IOnError,
	IOnFocus,
	IOnMouseEnter,
	IOnMouseLeave,
	IOnValid
} from "@react-library/common";

/**
 * Type for callback events for 
 */
export type TextFieldEvents = (
	IOnBlur<Callback<void>> &
	IOnError<Callback<void>> &
	IOnFocus<Callback<void>> &
	IOnMouseEnter<Element> &
	IOnMouseLeave<Element> &
	IOnValid<Callback<void>>
);
