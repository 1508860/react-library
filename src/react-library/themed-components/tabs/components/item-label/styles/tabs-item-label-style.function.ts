import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { TABS_PROPERTY_MAP } from "../../../constants/tabs-property-map.const";
import type { TabsStyle } from "../../../enums/tabs-style.type";
import type { TabsColourState } from "../../../types/tabs-colour-state.type";

/**
 * Resolve tabs item label style
 * @param style
 * @param font
 * @param colourState
 * @param isActive
 */
export function tabsItemLabelStyle(
	style: TabsStyle,
	font: Font,
	colourState: TabsColourState,
	isActive: boolean
): CSSProperties {
	return {
		color: colourState.isActive[`${isActive}`].label.toColourString(),
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: TABS_PROPERTY_MAP.style[style].item.content.fontSize,
		fontWeight: TABS_PROPERTY_MAP.style[style].item.content.fontWeight,
		lineHeight: TABS_PROPERTY_MAP.style[style].item.content.lineHeight,
	};
};
