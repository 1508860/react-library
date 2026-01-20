import type { ProviderProps } from "react";

import { CURRENCY_CODE_CONTEXT } from "./currency-code-context.const";
import type { CurrencyCode } from "./currency-code.type";

/**
 * Component for providing a currency code
 * Typically used once at the root of an app
 * @param props
 */
export function CurrencyCodeProvider(props: ProviderProps<CurrencyCode>) {
	return (
		<CURRENCY_CODE_CONTEXT.Provider value={props.value}>
			{props.children}
		</CURRENCY_CODE_CONTEXT.Provider>
	);
}
