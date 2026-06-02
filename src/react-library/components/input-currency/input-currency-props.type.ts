import type { CSSProperties, PointerEventHandler } from "react";

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
	IOnPointerEnter,
	IOnPointerLeave,
	IOnValueChange,
	IPlaceholder,
	IStyle,
	IValue,
	IValueStep
} from "@react-library/common";

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
	Partial<IOnPointerEnter<PointerEventHandler<Element>>> &
	Partial<IOnPointerLeave<PointerEventHandler<Element>>> &
	IOnValueChange<CallbackWithParameter<(Currency | undefined), void>> &
	Partial<IPlaceholder<string>> &
	Partial<IValueStep<number>> &
	Partial<IStyle<CSSProperties>> &
	IValue<Currency | undefined>
);
