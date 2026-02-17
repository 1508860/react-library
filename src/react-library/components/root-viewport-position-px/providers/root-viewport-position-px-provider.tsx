import type { ProviderProps } from "react";

import type { ViewportPositionPx } from "@react-library/common";

import { ROOT_VIEWPORT_POSITION_PX_CONTEXT } from "../constants/root-viewport-position-px-context.const";

/**
 * Component for providing root viewport position in px
 * Should be used once at the root of an app
 * @param props
 */
export function RootViewportPositionPxProvider(props: ProviderProps<ViewportPositionPx>) {
	return (
		<ROOT_VIEWPORT_POSITION_PX_CONTEXT.Provider value={props.value}>
			{props.children}
		</ROOT_VIEWPORT_POSITION_PX_CONTEXT.Provider>
	);
}
