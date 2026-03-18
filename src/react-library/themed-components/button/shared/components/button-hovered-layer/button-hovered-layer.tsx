import { Fragment } from "react";

import { buttonHoveredLayerStyle } from "./styles/button-hovered-layer-style.function";
import type { ButtonHoveredLayerProps } from "./types/button-hovered-layer-props.type";

/**
 * Button hovered layer component
 * @param props
 */
export function ButtonHoveredLayer(props: ButtonHoveredLayerProps) {

	if (!props.show) return (
		<Fragment key="no-button-hovered-layer" />
	);

	return (
		<div
			key="button-hovered-layer"
			style={buttonHoveredLayerStyle(props.colour)}
		/>
	);
}
