import { useCheckboxIsHoveredContext } from "../../hooks/checkbox-is-hovered-context.hook";

import { checkboxContainerStyle } from "./styles/checkbox-container-style.function";
import type { CheckboxContainerProps } from "./types/checkbox-container-props.type";
import { useCheckboxEventsContext } from "../../hooks/checkbox-events-context.hook";

/**
 * Checkbox container
 */
export function CheckboxContainer(props: CheckboxContainerProps) {

	const checkboxEvents = useCheckboxEventsContext();
	const checkboxIsHovered = useCheckboxIsHoveredContext();

	return (
		<div
			onClick={checkboxEvents.onClick}
			onPointerCancel={checkboxEvents.onPointerLeave}
			onPointerEnter={checkboxEvents.onPointerEnter}
			onPointerLeave={checkboxEvents.onPointerLeave}
			style={checkboxContainerStyle(!!props.isDisabled, checkboxIsHovered)}
		>
			{props.children}
		</div>
	);
}
