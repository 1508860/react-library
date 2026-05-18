import { HOVER_LAYER_IS_DISABLED_CONTEXT } from "../../constants/hover-layer-is-disabled-context.const";

import type { HoverLayerIsDisabledProviderProps } from "./types/hover-layer-is-disabled-provider-props.type";

/**
 * Component for providing is disabled for the hover layer component
 * @param props
 */
export function HoverLayerIsDisabledProvider(props: HoverLayerIsDisabledProviderProps) {
	return (
		<HOVER_LAYER_IS_DISABLED_CONTEXT value={props.isDisabled}>
			{props.children}
		</HOVER_LAYER_IS_DISABLED_CONTEXT>
	);
}
