import type { CSSProperties } from "react";

import { Orientation } from "@react-library/common";

import type { VirtualScrollBarConfig } from "../../../types/virtual-scrollbar-config.type";

/**
 * Resolve virtual scroll style based on parameters
 * @param orientation
 * @param scrollbarConfig
 */
export function virtualScrollStyle(orientation: Orientation, scrollbarConfig: Partial<VirtualScrollBarConfig> | undefined): CSSProperties {

	const scrollbarColour = scrollbarConfig?.colour;

	return {
		height: "100%",
		width: "100%",
		overflowX: orientation === Orientation.Horizontal ? "auto" : "unset",
		overflowY: orientation === Orientation.Vertical ? "auto" : "unset",
		scrollbarColor: scrollbarColour ? `${scrollbarColour.thumb.toColourString()} ${scrollbarColour.track.toColourString()}` : undefined
	};
};
