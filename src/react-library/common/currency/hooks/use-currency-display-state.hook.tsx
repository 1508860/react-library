import { useEffect, useState } from "react";

import type { CurrencyDisplay } from "../types/currency-display.type";
import type { Currency } from "../types/currency.type";
import { useCurrencyDisplayFormatterState } from "./formatter/use-currency-display-formatter-state.hook";

/**
 * Custom hook for a numerical value to be mapped to a currency valid display value
 * @param value
 */
export function useCurrencyDisplayState(value: Currency | null | undefined): [CurrencyDisplay | undefined] {

	const [state, setState] = useState<CurrencyDisplay | undefined>(undefined);

	const [currencyDisplayFormatterState] = useCurrencyDisplayFormatterState(false);

	useEffect(
		() => {
			if (!currencyDisplayFormatterState) return;

			if (value === undefined || value === null || typeof value !== "number" || isNaN(value)) {
				setState(undefined);
				return;
			}

			const newStateFormatted = currencyDisplayFormatterState.format(value);
			setState(newStateFormatted);
		},
		[value, currencyDisplayFormatterState]
	);

	return [state];
}
