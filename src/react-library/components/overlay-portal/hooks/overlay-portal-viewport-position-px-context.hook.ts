import { useContext } from "react";

import { NullContextError, type ViewportPositionPx } from "@react-library/common";

import { OVERLAY_PORTAL_VIEWPORT_POSITION_PX_CONTEXT } from "../constants/overlay-portal-viewport-position-px-context.const";

/**
 * Returns context for {@link OVERLAY_PORTAL_VIEWPORT_POSITION_PX_CONTEXT} and ensures a non-null value
 */
export function useOverlayPortalViewportPositionPxContext(): ViewportPositionPx {
	const result = useContext(OVERLAY_PORTAL_VIEWPORT_POSITION_PX_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
