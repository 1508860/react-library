import { Fragment } from "react";

import { useFontContext } from "@react-library/common";

import { useCheckboxColourStateContext } from "../../hooks/checkbox-colour-state-context.hook";
import { useCheckboxIsHoveredContext } from "../../hooks/checkbox-is-hovered-context.hook";

import { checkboxLabelStyle } from "./styles/checkbox-label-style.function";
import type { CheckboxLabelProps } from "./types/checkbox-label-props.type";

/**
 * Checkbox label
 */
export function CheckboxLabel(props: CheckboxLabelProps) {

	const font = useFontContext();

	const colourState = useCheckboxColourStateContext();
	const isHovered = useCheckboxIsHoveredContext();

	if (props.label === undefined) return (
		<Fragment key="no-label" />
	);

	return (
		<label
			htmlFor={props.id}
			key="label"
			style={checkboxLabelStyle(props.isDisabled, font, colourState, isHovered)}
		>
			{props.label}
		</label>
	);
}
