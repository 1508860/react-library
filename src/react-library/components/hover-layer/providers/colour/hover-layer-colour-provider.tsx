import { HOVER_LAYER_COLOUR_CONTEXT } from "../../constants/hover-layer-colour-context.const";

import type { HoverLayerColourProviderProps } from "./types/hover-layer-colour-provider-props.type";

/**
 * Component for providing colour for the hover layer component
 * @param props
 */
export function HoverLayerColourProvider(props: HoverLayerColourProviderProps) {
	return (
		<HOVER_LAYER_COLOUR_CONTEXT value={props.colour}>
			{props.children}
		</HOVER_LAYER_COLOUR_CONTEXT>
	);
}
