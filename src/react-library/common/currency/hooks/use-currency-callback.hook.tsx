import { useCallback } from "react";

import type { Currency } from "../types/currency.type";
import { useCurrencyFormatterState } from "./formatter/use-currency-formatter-state.hook";

/**
 * Custom hook for a numerical value to be mapped to a currency valid value in a callback function
 */
export function useCurrencyCallback(): (value: Currency | null | undefined) => Currency | undefined {

	const [currencyFormatterState] = useCurrencyFormatterState(false);

	const callback = useCallback(
		(value: Currency | null | undefined) => {
			if (!currencyFormatterState) return undefined;
			if (value === undefined || value === null || typeof value !== "number" || isNaN(value)) return undefined;
			const newStateFormatted = currencyFormatterState.format(value);
			const newStateParsed = parseFloat(newStateFormatted);
			return newStateParsed;
		},
		[currencyFormatterState]
	);

	return callback;
}
