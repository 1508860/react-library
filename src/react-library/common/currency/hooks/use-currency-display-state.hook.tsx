import { useEffect, useState } from "react";

import type { CurrencyDisplay } from "../types/currency-display.type";
import type { CurrencyValue } from "../types/currency-value.type";
import { useCurrencyDisplayFormatterState } from "./formatter/use-currency-display-formatter-state.hook";

/**
 * Custom hook for a numerical value to be mapped to a currency valid display value
 * @param value
 */
export function useCurrencyDisplayState(value: CurrencyValue): [CurrencyDisplay] {

	const [state, setState] = useState<CurrencyDisplay>("");

	const [currencyDisplayFormatterState] = useCurrencyDisplayFormatterState(false);

	useEffect(
		() => {
			if (value === undefined || value === null || typeof value !== "number" || isNaN(value)) {
				setState("");
				return;
			}

			const newStateFormatted = currencyDisplayFormatterState.format(value);
			setState(newStateFormatted);
		},
		[value, currencyDisplayFormatterState]
	);

	return [state];
}
