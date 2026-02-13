import type { ProviderProps } from "react";

import { FONT_CONTEXT } from "./font-context.const";
import type { Font } from "./font.type";

/**
 * Component for providing a default font
 * Typically used once at the root of an app
 * @param props
 */
export function FontProvider(props: ProviderProps<Font>) {
	return (
		<FONT_CONTEXT.Provider value={props.value}>
			{props.children}
		</FONT_CONTEXT.Provider>
	);
}
