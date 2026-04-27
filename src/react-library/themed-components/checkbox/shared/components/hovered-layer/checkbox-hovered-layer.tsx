import { Fragment } from "react";

import { useCheckboxColourStateContext } from "../../hooks/checkbox-colour-state-context.hook";
import { useCheckboxIsHoveredContext } from "../../hooks/checkbox-is-hovered-context.hook";

import { checkboxHoveredLayerStyle } from "./styles/checkbox-hovered-layer-style.function";
import type { CheckboxHoveredLayerProps } from "./types/checkbox-hovered-layer-props.type";

/**
 * Checkbox hovered layer component
 * @param props
 */
export function CheckboxHoveredLayer(props: CheckboxHoveredLayerProps) {

	const checkboxColourState = useCheckboxColourStateContext();
	const checkboxIsHovered = useCheckboxIsHoveredContext();

	if (props.isDisabled || !checkboxIsHovered) return (
		<Fragment key="no-checkbox-hovered-layer" />
	);

	return (
		<div
			key="checkbox-hovered-layer"
			style={checkboxHoveredLayerStyle(checkboxColourState)}
		/>
	);
}
