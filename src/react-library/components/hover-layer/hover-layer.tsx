import { Fragment } from "react";

import { useHoverLayerColourContext } from "./hooks/hover-layer-colour-context.hook";
import { useHoverLayerShowContext } from "./hooks/hover-layer-show-context.hook";
import { hoverLayerStyle } from "./styles/hover-layer-style.function";

/**
 * Hover layer component
 * Note: Will fill the first parent container with relative positioning
 */
export function HoverLayer() {

	const colour = useHoverLayerColourContext();
	const show = useHoverLayerShowContext();

	if (!show) return (
		<Fragment key="no-hover-layer" />
	);

	return (
		<div
			key="hover-layer"
			style={hoverLayerStyle(colour)}
		/>
	);
}
