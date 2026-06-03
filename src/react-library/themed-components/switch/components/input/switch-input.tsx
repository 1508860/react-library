import { useCallback } from "react";

import type { Callback } from "@react-library/common";

import { SWITCH_INPUT_STYLE } from "./styles/switch-input-style.const";
import type { SwitchInputProps } from "./types/switch-input-props.type";

/**
 * Switch input
 */
export function SwitchInput(props: SwitchInputProps) {

	// Handle click event
	const handleOnClick = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			props.onValueChange(!props.value);
		},
		[props]
	);

	return (
		<input
			checked={props.value}
			disabled={props.isDisabled}
			id={props.id}
			key="input"
			name={props.name}
			onChange={handleOnClick}
			placeholder={props.label}
			style={SWITCH_INPUT_STYLE}
			type="checkbox"
			value={`${props.value}`}
		/>
	);
}
