import type { CSSProperties } from "react";

import { TABS_PROPERTY_MAP } from "../../../constants/tabs-property-map.const";
import type { TabsStyle } from "../../../enums/tabs-style.type";

/**
 * Resolve tabs item container style
 * @param style
 */
export function tabsItemContainerStyle(style: TabsStyle): CSSProperties {
	return {
		alignItems: "center",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		flexShrink: 0,
		gap: TABS_PROPERTY_MAP.style[style].item.gap,
		overflow: "hidden",
		paddingLeft: TABS_PROPERTY_MAP.style[style].item.paddingHorizontal,
		paddingRight: TABS_PROPERTY_MAP.style[style].item.paddingHorizontal,
		position: "relative"
	};
};
