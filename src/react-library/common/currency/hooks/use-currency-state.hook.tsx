import { useEffect, useState } from "react";

import type { CurrencyInvalidValue } from "../types/currency-invalid-value.type";
import type { CurrencyValue } from "../types/currency-value.type";
import { useCurrencyFormatterState } from "./formatter/use-currency-formatter-state.hook";

/**
 * Custom hook for a numerical value to be mapped to a currency valid value
 * @param value
 */
export function useCurrencyState<TCurrencyInvalidValue extends CurrencyInvalidValue = never>(
	value: CurrencyValue<TCurrencyInvalidValue>): [CurrencyValue<TCurrencyInvalidValue>] {

	const [state, setState] = useState<CurrencyValue<TCurrencyInvalidValue>>(() => value);

	const [currencyFormatterState] = useCurrencyFormatterState(false);

	useEffect(
		() => {
			if (value === undefined || value === null || typeof value !== "number" || isNaN(value)) {
				setState(value);
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
