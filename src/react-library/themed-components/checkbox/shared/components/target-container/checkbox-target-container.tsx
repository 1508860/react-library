import { useCallback } from "react";

import type { Callback } from "@react-library/common";

import { useCheckboxEventsContext } from "../../hooks/checkbox-events-context.hook";

import { CHECKBOX_TARGET_CONTAINER_STYLE } from "./styles/checkbox-target-container-style.const";
import type { CheckboxTargetContainerProps } from "./types/checkbox-target-container-props.type";

/**
 * Checkbox target container
 */
export function CheckboxTargetContainer(props: CheckboxTargetContainerProps) {

	// Contexts
	const checkboxEvents = useCheckboxEventsContext();

	// Handle click event
	const handleOnClick = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			checkboxEvents.onToggle();
		},
		[props.isDisabled, checkboxEvents]
	);

	return (
		<div
			onClick={handleOnClick}
			style={CHECKBOX_TARGET_CONTAINER_STYLE}
		>
			{props.children}
		</div>
	);
}
