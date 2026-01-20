import type { ProviderProps } from "react";

import { FONT_CONTEXT } from "./font-context.const";
import type { IFont } from "./font.interface";

/**
 * Component for providing a default font
 * Typically used once at the root of an app
 * @param props
 */
export function FontProvider(props: ProviderProps<IFont>) {
	return (
		<FONT_CONTEXT.Provider value={props.value}>
			{props.children}
		</FONT_CONTEXT.Provider>
	);
}
