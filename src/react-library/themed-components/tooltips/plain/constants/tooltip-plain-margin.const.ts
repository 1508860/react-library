import type { SizePx } from "@react-library/common";

/**
 * Tooltip plain position margin to determine how far away the tooltip should be away from the child element
 */
export const TOOLTIP_PLAIN_POSITION_MARGIN: SizePx = 4;

/**
 * Tooltip plain overlay portal margin to prevent tooltips from being positioned too closely to the edge of the containing portal
 */
export const TOOLTIP_PLAIN_OVERLAY_PORTAL_MARGIN: SizePx = TOOLTIP_PLAIN_POSITION_MARGIN;
