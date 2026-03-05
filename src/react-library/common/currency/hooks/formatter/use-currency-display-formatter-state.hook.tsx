import { useEffect, useState } from "react";

import {
	useCurrencyCodeContext,
	useLanguageCodeContext
} from "../../../iso";

/**
 * Custom hook for resolving a currency display formatter
 * @param roundValue round the value to zero decimal places or dont round to the currency's standard decimal place
 */
export function useCurrencyDisplayFormatterState(roundValue: boolean): [Intl.NumberFormat | null] {

	const currencyCode = useCurrencyCodeContext();
	const languageCode = useLanguageCodeContext();

	const [state, setState] = useState<Intl.NumberFormat | null>(null);

	useEffect(
		() => setState(
			new Intl.NumberFormat(
				languageCode,
				{
					style: "currency",
					currency: currencyCode,
					useGrouping: true,
					minimumFractionDigits: roundValue ? 0 : 2,
					maximumFractionDigits: roundValue ? 0 : 2
				}
			)
		),
		[roundValue, currencyCode, languageCode]
	);

	return [state];
}
