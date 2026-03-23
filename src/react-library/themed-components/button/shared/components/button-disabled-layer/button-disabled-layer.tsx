import { Fragment } from "react";

import { useButtonColourStateContext } from "../../hooks/button-colour-state-context.hook";

import { buttonDisabledLayerStyle } from "./styles/button-disabled-layer-style.function";
import type { ButtonDisabledLayerProps } from "./types/button-disabled-layer-props.type";

/**
 * Button disabled layer component
 * @param props
 */
export function ButtonDisabledLayer(props: ButtonDisabledLayerProps) {

	const buttonColourState = useButtonColourStateContext();

	if (!props.isDisabled) return (
		<Fragment key="no-button-disabled-layer" />
	);

	return (
		<div
			key="button-disabled-layer"
			style={buttonDisabledLayerStyle(buttonColourState.disabledColour)}
		/>
	);
}
