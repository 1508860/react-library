import type { ProviderProps } from "react";

import type { IViewportPosition } from "@react-library/common";

import { ROOT_VIEWPORT_POSITION_CONTEXT } from "../constants/root-viewport-position-context.const";

/**
 * Component for providing root viewport position
 * Should be used once at the root of an app
 * @param props
 */
export function RootViewportPositionProvider(props: ProviderProps<IViewportPosition>) {
	return (
		<ROOT_VIEWPORT_POSITION_CONTEXT.Provider value={props.value}>
			{props.children}
		</ROOT_VIEWPORT_POSITION_CONTEXT.Provider>
	);
}
