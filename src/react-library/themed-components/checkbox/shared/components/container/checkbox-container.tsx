import { useCheckboxEventsContext } from "../../hooks/checkbox-events-context.hook";

import { CHECKBOX_CONTAINER_STYLE } from "./styles/checkbox-container-style.const";
import type { CheckboxContainerProps } from "./types/checkbox-container-props.type";

/**
 * Checkbox container
 */
export function CheckboxContainer(props: CheckboxContainerProps) {

	// Contexts
	const checkboxEvents = useCheckboxEventsContext();

	return (
		<div
			onPointerCancel={checkboxEvents.onPointerLeave}
			onPointerEnter={checkboxEvents.onPointerEnter}
			onPointerLeave={checkboxEvents.onPointerLeave}
			style={CHECKBOX_CONTAINER_STYLE}
		>
			{props.children}
		</div>
	);
}
