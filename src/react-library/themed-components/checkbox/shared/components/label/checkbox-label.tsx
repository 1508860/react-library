import { Fragment } from "react";

import { useFontContext } from "@react-library/common";

import { useCheckboxColourStateContext } from "../../hooks/checkbox-colour-state-context.hook";

import { checkboxLabelStyle } from "./styles/checkbox-label-style.function";
import type { CheckboxLabelProps } from "./types/checkbox-label-props.type";

/**
 * Checkbox label
 */
export function CheckboxLabel(props: CheckboxLabelProps) {

	const font = useFontContext();

	const checkboxColourState = useCheckboxColourStateContext();

	if (props.label === undefined) return (
		<Fragment key="no-label" />
	);

	return (
		<label
			htmlFor={props.id}
			key="label"
			style={checkboxLabelStyle(font, checkboxColourState)}
		>
			{props.label}
		</label>
	);
}
