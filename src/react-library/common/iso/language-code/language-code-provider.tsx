import type { ProviderProps } from "react";

import { LANGUAGE_CODE_CONTEXT } from "./language-code-context.const";
import type { LanguageCode } from "./language-code.type";

/**
 * Component for providing a language code
 * Typically used once at the root of an app
 * @param props
 */
export function LanguageCodeProvider(props: ProviderProps<LanguageCode>) {
	return (
		<LANGUAGE_CODE_CONTEXT.Provider value={props.value}>
			{props.children}
		</LANGUAGE_CODE_CONTEXT.Provider>
	);
}
