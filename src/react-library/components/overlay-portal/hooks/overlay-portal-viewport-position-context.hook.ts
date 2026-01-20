import { useContext } from "react";

import { type IViewportPosition, NullContextError } from "@react-library/common";

import { OVERLAY_PORTAL_VIEWPORT_POSITION_CONTEXT } from "../constants/overlay-portal-viewport-position-context.const";

/**
 * Returns context for {@link OVERLAY_PORTAL_VIEWPORT_POSITION_CONTEXT} and ensures a non-null value
 */
export function useOverlayPortalViewportPositionContext(): IViewportPosition {
	const result = useContext(OVERLAY_PORTAL_VIEWPORT_POSITION_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
