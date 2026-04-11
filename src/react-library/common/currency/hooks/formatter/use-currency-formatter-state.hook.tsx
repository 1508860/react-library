import { useCallback } from "react";

import { useResolveState } from "../../../hooks";
import { useLanguageCodeContext } from "../../../iso";
import type { Callback } from "../../../types";

/**
 * Custom hook for resolving a currency formatter
 * @param roundValue round the value to zero decimal places or dont round to the currency's standard decimal place
 */
export function useCurrencyFormatterState(roundValue: boolean): [Intl.NumberFormat] {

	const languageCode = useLanguageCodeContext();

	const resolveState = useCallback<Callback<Intl.NumberFormat>>(
		() => (
			new Intl.NumberFormat(
				languageCode,
				{
					style: "decimal",
					useGrouping: false,
					minimumFractionDigits: roundValue ? 0 : 2,
					maximumFractionDigits: roundValue ? 0 : 2
				}
			)
		),
		[roundValue, languageCode]
	);

	const state = useResolveState<Intl.NumberFormat>(resolveState);

	return [state];
}
