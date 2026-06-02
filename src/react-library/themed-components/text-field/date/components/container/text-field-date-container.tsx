import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import { useTextFieldIsHoveredStateContext } from "../../../shared/hooks/text-field-is-hovered-state-context.hook";
import { useTextFieldOnClickContext } from "../../../shared/hooks/text-field-on-click-context.hook";

import { textFieldDateContainerStyle } from "./styles/text-field-date-container-style.function";
import type { TextFieldDateContainerProps } from "./types/text-field-date-container-props.type";

/**
 * Text field date container component
 */
export function TextFieldDateContainer(props: TextFieldDateContainerProps) {

	const isHovered = useTextFieldIsHoveredStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	const onClick = useTextFieldOnClickContext();

	return (
		<div
			onClick={onClick}
			onPointerCancel={textFieldEvents.onPointerLeave}
			onPointerEnter={textFieldEvents.onPointerEnter}
			onPointerLeave={textFieldEvents.onPointerLeave}
			style={textFieldDateContainerStyle(isHovered)}
		>
			{props.children}
		</div>
	);
}
