import type { ProviderProps } from "react";

import type { IViewportPosition } from "@react-library/common";

import { OVERLAY_PORTAL_VIEWPORT_POSITION_CONTEXT } from "../constants/overlay-portal-viewport-position-context.const";

/**
 * Component for providing a overlay portal viewport position
 * Typically used once at the root of an app
 * @param props
 */
export function OverlayPortalViewportPositionProvider(props: ProviderProps<IViewportPosition>) {
	return (
		<OVERLAY_PORTAL_VIEWPORT_POSITION_CONTEXT.Provider value={props.value}>
			{props.children}
		</OVERLAY_PORTAL_VIEWPORT_POSITION_CONTEXT.Provider>
	);
}
