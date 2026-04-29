import { useCallback } from "react";

import type { Callback } from "@react-library/common";

import { useCheckboxIsHoveredContext } from "../../hooks/checkbox-is-hovered-context.hook";

import { checkboxContainerStyle } from "./styles/checkbox-container-style.function";
import type { CheckboxContainerProps } from "./types/checkbox-container-props.type";
import { useCheckboxEventsContext } from "../../hooks/checkbox-events-context.hook";

/**
 * Checkbox container
 */
export function CheckboxContainer(props: CheckboxContainerProps) {

	// Contexts
	const checkboxEvents = useCheckboxEventsContext();
	const checkboxIsHovered = useCheckboxIsHoveredContext();

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
			onPointerCancel={checkboxEvents.onPointerLeave}
			onPointerEnter={checkboxEvents.onPointerEnter}
			onPointerLeave={checkboxEvents.onPointerLeave}
			style={checkboxContainerStyle(!!props.isDisabled, checkboxIsHovered)}
		>
			{props.children}
		</div>
	);
}
