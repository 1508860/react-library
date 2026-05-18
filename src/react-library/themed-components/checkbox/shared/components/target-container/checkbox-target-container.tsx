import { useCheckboxEventsContext } from "../../hooks/checkbox-events-context.hook";

import { CHECKBOX_TARGET_CONTAINER_STYLE } from "./styles/checkbox-target-container-style.const";
import type { CheckboxTargetContainerProps } from "./types/checkbox-target-container-props.type";

/**
 * Checkbox target container
 */
export function CheckboxTargetContainer(props: CheckboxTargetContainerProps) {

	// Contexts
	const checkboxEvents = useCheckboxEventsContext();

	return (
		<div
			onClick={checkboxEvents.onToggle}
			style={CHECKBOX_TARGET_CONTAINER_STYLE}
		>
			{props.children}
		</div>
	);
}
