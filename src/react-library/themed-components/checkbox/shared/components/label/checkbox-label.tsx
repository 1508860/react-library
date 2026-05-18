import { Fragment, useCallback } from "react";

import { useFontContext, type Callback } from "@react-library/common";

import { useCheckboxColourStateContext } from "../../hooks/checkbox-colour-state-context.hook";
import { useCheckboxEventsContext } from "../../hooks/checkbox-events-context.hook";

import { checkboxLabelStyle } from "./styles/checkbox-label-style.function";
import type { CheckboxLabelProps } from "./types/checkbox-label-props.type";

/**
 * Checkbox label
 */
export function CheckboxLabel(props: CheckboxLabelProps) {

	const font = useFontContext();

	const colourState = useCheckboxColourStateContext();
	const checkboxEvents = useCheckboxEventsContext();

	const handleOnClick = useCallback<Callback<void>>(
		() => {
			/**
			 * If a name attribute is provided,
			 * clicking the label will cause the input to toggle the value,
			 * so we don't need to fire the toggle event manually
			 */
			if (props.name !== undefined) return;
			checkboxEvents.onToggle();
		},
		[checkboxEvents, props.name]
	);

	if (props.label === undefined) return (
		<Fragment key="no-label" />
	);

	return (
		<label
			htmlFor={props.id}
			onClick={handleOnClick}
			key="label"
			style={checkboxLabelStyle(props.isDisabled, font, colourState)}
		>
			{props.label}
		</label>
	);
}
