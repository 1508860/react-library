import type { CSSProperties } from "react";

import { Orientation } from "@react-library/common";

import { TABS_PROPERTY_MAP } from "../../../constants/tabs-property-map.const";
import type { TabsStyle } from "../../../enums/tabs-style.type";

/**
 * Resolve tabs item content style
 * @param itemOrientation
 * @param style
 */
export function tabsItemContentStyle(itemOrientation: Orientation, style: TabsStyle): CSSProperties {
	return {
		alignItems: "center",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: itemOrientation === Orientation.Horizontal ? "row" : "column",
		flexShrink: 0,
		gap: TABS_PROPERTY_MAP.style[style].item.content.orientation[itemOrientation].gap,
		height: TABS_PROPERTY_MAP.style[style].item.content.orientation[itemOrientation].height,
		justifyContent: "center",
		paddingLeft: TABS_PROPERTY_MAP.style[style].item.content.paddingHorizontal,
		paddingRight: TABS_PROPERTY_MAP.style[style].item.content.paddingHorizontal
	};
};
