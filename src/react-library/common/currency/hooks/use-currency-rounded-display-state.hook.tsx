import { useEffect, useState } from "react";

import type { CurrencyDisplay } from "../types/currency-display.type";
import type { CurrencyInvalidValue } from "../types/currency-invalid-value.type";
import type { CurrencyValue } from "../types/currency-value.type";
import { useCurrencyDisplayFormatterState } from "./formatter/use-currency-display-formatter-state.hook";

/**
 * Custom hook for a numerical value to be mapped to a currency valid display value. Rounds value to 0 decimal places
 * @param value
 */
export function useCurrencyRoundedDisplayState<
	TCurrencyInvalidValue extends CurrencyInvalidValue = never
>(value: CurrencyValue<TCurrencyInvalidValue>): [CurrencyDisplay] {

	const [state, setState] = useState<CurrencyDisplay>("");

	const [currencyDisplayFormatterState] = useCurrencyDisplayFormatterState(true);

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
