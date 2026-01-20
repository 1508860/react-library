import type { ProviderProps } from "react";

import { OVERLAY_PORTAL_CONTEXT } from "../constants/overlay-portal-context.const";
import type { OverlayPortalContext } from "../types/overlay-portal-context.type";

/**
 * Component for providing a overlay portal
 * Typically used once at the root of an app
 * @param props
 */
export function OverlayPortalProvider(props: ProviderProps<OverlayPortalContext>) {
	return (
		<OVERLAY_PORTAL_CONTEXT.Provider value={props.value}>
			{props.children}
		</OVERLAY_PORTAL_CONTEXT.Provider>
	);
}
