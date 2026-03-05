import type {
	CallbackWithParameter,
	Currency,
	IId,
	IIsDisabled,
	IName,
	IOnBlur,
	IOnFocus,
	IOnValueChange,
	IPlaceholder,
	IStyle,
	IValue
} from "@react-library/common";
import type { CSSProperties } from "react";

/**
 * Props for input currency
 */
export type InputCurrencyProps = (
	Partial<IId<(number | string)>> &
	Partial<IIsDisabled> &
	Partial<IName<string>> &
	Partial<IOnBlur<CallbackWithParameter<(Currency | undefined), void>>> &
	Partial<IOnFocus<CallbackWithParameter<(Currency | undefined), void>>> &
	IOnValueChange<CallbackWithParameter<(Currency | undefined), void>> &
	Partial<IPlaceholder<string>> &
	Partial<IStyle<CSSProperties>> &
	IValue<Currency | undefined>
);
