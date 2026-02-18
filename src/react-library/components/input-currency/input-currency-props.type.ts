import type {
	CallbackWithParameter,
	Currency,
	IIsDisabled,
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
	Partial<IIsDisabled> &
	IOnValueChange<CallbackWithParameter<(Currency | undefined), void>> &
	Partial<IPlaceholder<string>> &
	Partial<IStyle<CSSProperties>> &
	IValue<Currency | undefined>
);
