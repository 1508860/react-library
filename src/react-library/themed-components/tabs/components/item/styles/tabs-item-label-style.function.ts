import type { CSSProperties } from "react";

import { TABS_PROPERTY_MAP } from "../../../constants/tabs-property-map.const";
import type { TabsStyle } from "../../../enums/tabs-style.type";

/**
 * Resolve tabs item label style
 * @param style
 */
export function tabsItemLabelStyle(style: TabsStyle): CSSProperties {
	return {
		flexShrink: 0,
		fontSize: TABS_PROPERTY_MAP.style[style].item.content.fontSize,
		fontWeight: TABS_PROPERTY_MAP.style[style].item.content.fontWeight,
		lineHeight: TABS_PROPERTY_MAP.style[style].item.content.lineHeight,
	};
};
