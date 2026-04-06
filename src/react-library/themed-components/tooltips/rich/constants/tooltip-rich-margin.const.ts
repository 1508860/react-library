import type { SizePx } from "@react-library/common";

/**
 * Tooltip rich position margin to determine how far away the tooltip should be away from the child element
 */
export const TOOLTIP_RICH_POSITION_MARGIN: SizePx = 8;

/**
 * Tooltip rich overlay portal margin to prevent tooltips from being positioned too closely to the edge of the containing portal
 */
export const TOOLTIP_RICH_OVERLAY_PORTAL_MARGIN: SizePx = TOOLTIP_RICH_POSITION_MARGIN;
