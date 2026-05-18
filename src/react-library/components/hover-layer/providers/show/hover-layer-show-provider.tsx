import { HOVER_LAYER_SHOW_CONTEXT } from "../../constants/hover-layer-show-context.const";

import type { HoverLayerIsShowProviderProps } from "./types/hover-layer-show-provider-props.type";

/**
 * Component for providing a show state for the hover layer component
 * @param props
 */
export function HoverLayerShowProvider(props: HoverLayerIsShowProviderProps) {
	return (
		<HOVER_LAYER_SHOW_CONTEXT value={props.show}>
			{props.children}
		</HOVER_LAYER_SHOW_CONTEXT>
	);
}
