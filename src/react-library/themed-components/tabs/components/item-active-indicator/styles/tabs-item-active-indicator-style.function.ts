import type { CSSProperties } from "react";

import { TABS_PROPERTY_MAP } from "../../../constants/tabs-property-map.const";
import type { TabsStyle } from "../../../enums/tabs-style.type";
import type { TabsColourState } from "../../../types/tabs-colour-state.type";

/**
 * Resolve tabs item active indicator style
 * @param style
 * @param colourState
 */
export function tabsItemActiveIndicatorStyle(style: TabsStyle, colourState: TabsColourState): CSSProperties {
	return {
		backgroundColor: colourState.activeIndicator.toColourString(),
		borderTopLeftRadius: TABS_PROPERTY_MAP.style[style].item.activeIndicator.borderTopLeftRadius,
		borderTopRightRadius: TABS_PROPERTY_MAP.style[style].item.activeIndicator.borderTopRightRadius,
		height: TABS_PROPERTY_MAP.style[style].item.activeIndicator.height,
		width: "100%"
	};
};
