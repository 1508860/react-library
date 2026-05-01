import type { CSSProperties } from "react";

import { SWITCH_PROPERTY_MAP } from "../../../constants/switch-property-map.const";

/**
 * Switch track style
 */
export const SWITCH_TRACK_STYLE: CSSProperties = {
	borderRadius: SWITCH_PROPERTY_MAP.track.borderRadius,
	flexShrink: 0,
	height: SWITCH_PROPERTY_MAP.track.height,
	overflow: "hidden",
	position: "relative",
	width: SWITCH_PROPERTY_MAP.track.width
};
