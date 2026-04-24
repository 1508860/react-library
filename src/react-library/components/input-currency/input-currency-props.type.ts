import type {
	CallbackWithParameter,
	Currency,
	IClassName,
	IId,
	IIsDisabled,
	IMaxValue,
	IMinValue,
	IName,
	IOnBlur,
	IOnFocus,
	IOnMouseEnter,
	IOnMouseLeave,
	IOnValueChange,
	IPlaceholder,
	IStyle,
	IValue,
	IValueStep
} from "@react-library/common";
import type { CSSProperties } from "react";

/**
 * Props for input currency
 */
export type InputCurrencyProps = (
	Partial<IClassName<string>> &
	Partial<IId<(number | string)>> &
	Partial<IIsDisabled> &
	Partial<IMaxValue<number>> &
	Partial<IMinValue<number>> &
	Partial<IName<string>> &
	Partial<IOnBlur<CallbackWithParameter<(Currency | undefined), void>>> &
	Partial<IOnFocus<CallbackWithParameter<(Currency | undefined), void>>> &
	Partial<IOnMouseEnter<Element>> &
	Partial<IOnMouseLeave<Element>> &
	IOnValueChange<CallbackWithParameter<(Currency | undefined), void>> &
	Partial<IPlaceholder<string>> &
	Partial<IValueStep<number>> &
	Partial<IStyle<CSSProperties>> &
	IValue<Currency | undefined>
);
