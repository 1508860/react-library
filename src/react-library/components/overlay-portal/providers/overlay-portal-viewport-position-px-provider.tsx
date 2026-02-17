import type { ProviderProps } from "react";

import type { ViewportPositionPx } from "@react-library/common";

import { OVERLAY_PORTAL_VIEWPORT_POSITION_PX_CONTEXT } from "../constants/overlay-portal-viewport-position-px-context.const";

/**
 * Component for providing a overlay portal viewport position
 * Typically used once at the root of an app
 * @param props
 */
export function OverlayPortalViewportPositionPxProvider(props: ProviderProps<ViewportPositionPx>) {
	return (
		<OVERLAY_PORTAL_VIEWPORT_POSITION_PX_CONTEXT.Provider value={props.value}>
			{props.children}
		</OVERLAY_PORTAL_VIEWPORT_POSITION_PX_CONTEXT.Provider>
	);
}
