import { Fragment } from "react";

import { buttonDisabledLayerStyle } from "./styles/button-disabled-layer-style.function";
import type { ButtonDisabledLayerProps } from "./types/button-disabled-layer-props.type";

/**
 * Button disabled layer component
 * @param props
 */
export function ButtonDisabledLayer(props: ButtonDisabledLayerProps) {

	if (!props.show) return (
		<Fragment key="no-button-disabled-layer" />
	);

	return (
		<div
			key="button-disabled-layer"
			style={buttonDisabledLayerStyle(props.colour)}
		/>
	);
}
