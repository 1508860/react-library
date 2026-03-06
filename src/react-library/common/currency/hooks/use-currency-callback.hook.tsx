import { useCallback } from "react";

import type { CurrencyInvalidValue } from "../types/currency-invalid-value.type";
import type { CurrencyValue } from "../types/currency-value.type";
import { useCurrencyFormatterState } from "./formatter/use-currency-formatter-state.hook";

/**
 * Custom hook for a numerical value to be mapped to a currency valid value in a callback function
 */
export function useCurrencyCallback<
	TCurrencyInvalidValue extends CurrencyInvalidValue = never
>(): (value: CurrencyValue<TCurrencyInvalidValue>) => CurrencyValue<TCurrencyInvalidValue> {

	const [currencyFormatterState] = useCurrencyFormatterState(false);

	const callback = useCallback(
		(value: CurrencyValue<TCurrencyInvalidValue>) => {
			if (value === undefined || value === null || typeof value !== "number" || isNaN(value)) return value;
			const newStateFormatted = currencyFormatterState.format(value);
			const newStateParsed = parseFloat(newStateFormatted);
			return newStateParsed;
		},
		[currencyFormatterState]
	);

	return callback;
}
