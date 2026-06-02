import type { PointerEventHandler } from "react";

import type {
	Callback,
	CallbackWithParameter,
	IOnBlur,
	IOnFocus,
	IOnHideContent,
	IOnIsErrored,
	IOnPointerEnter,
	IOnPointerLeave,
	IOnShowContent,
} from "@react-library/common";

/**
 * Type for callback events for the text field
 */
export type TextFieldEvents = (
	IOnBlur<Callback<void>> &
	IOnFocus<Callback<void>> &
	IOnHideContent<Callback<void>> &
	IOnIsErrored<CallbackWithParameter<boolean, void>> &
	IOnPointerEnter<PointerEventHandler<Element>> &
	IOnPointerLeave<PointerEventHandler<Element>> &
	IOnShowContent<Callback<void>>
);
