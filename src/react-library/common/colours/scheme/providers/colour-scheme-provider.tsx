import type { ProviderProps } from "react";

import { COLOUR_SCHEME_CONTEXT } from "../constants/colour-scheme-context.const";
import type { ColourScheme } from "../types/colour-scheme.type";

/**
 * Component for providing a colour scheme
 * Typically used once at the root of an app
 * @param props
 */
export function ColourSchemeProvider(props: ProviderProps<ColourScheme>) {
	return (
		<COLOUR_SCHEME_CONTEXT.Provider value={props.value}>
			{props.children}
		</COLOUR_SCHEME_CONTEXT.Provider>
	);
}
