import { useEffect, useState } from "react";

import type { Currency } from "../types/currency.type";
import { useCurrencyFormatterState } from "./formatter/use-currency-formatter-state.hook";

/**
 * Custom hook for a numerical value to be mapped to a currency valid value. Rounds value to 0 decimal places
 * @param value
 */
export function useCurrencyRoundedState(value: Currency | null | undefined): [Currency | undefined] {

	const [state, setState] = useState<Currency | undefined>(undefined);

	const [currencyFormatterState] = useCurrencyFormatterState(true);

	useEffect(
		() => {
			if (!currencyFormatterState || value === undefined || value === null || typeof value !== "number" || isNaN(value)) {
				setState(undefined);
				return;
			}

			const newStateFormatted = currencyFormatterState.format(value);
			const newStateParsed = parseFloat(newStateFormatted);
			setState(newStateParsed);
		},
		[value, currencyFormatterState]
	);

	return [state];
}
