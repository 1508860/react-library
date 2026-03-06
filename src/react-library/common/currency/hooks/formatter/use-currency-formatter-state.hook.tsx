import { useCallback, useEffect, useState } from "react";

import { useLanguageCodeContext } from "../../../iso";

/**
 * Custom hook for resolving a currency formatter
 * @param roundValue round the value to zero decimal places or dont round to the currency's standard decimal place
 */
export function useCurrencyFormatterState(roundValue: boolean): [Intl.NumberFormat] {

	const languageCode = useLanguageCodeContext();

	const resolveState = useCallback<() => Intl.NumberFormat>(
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

	const [state, setState] = useState<Intl.NumberFormat>(() => resolveState());

	useEffect(
		() => setState(resolveState()),
		[resolveState]
	);

	return [state];
}
