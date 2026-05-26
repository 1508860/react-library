import type { CSSProperties } from "react";

import type { TabsColourState } from "../../../types/tabs-colour-state.type";

/**
 * Resolve tabs bar style
 * @param colourState
 */
export function tabsBarStyle(colourState: TabsColourState): CSSProperties {
	return {
		backgroundColor: colourState.background.toColourString(),
		width: "100%"
	}
};
