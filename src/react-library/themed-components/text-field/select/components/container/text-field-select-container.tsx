import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import { useTextFieldIsHoveredStateContext } from "../../../shared/hooks/text-field-is-hovered-state-context.hook";
import { useTextFieldSelectOnClickContext } from "../../hooks/text-field-select-on-click-context.hook";
import { useTextFieldSelectRefContext } from "../../hooks/text-field-select-ref-context.hook";

import { textFieldSelectContainerStyle } from "./styles/text-field-select-container-style.function";
import type { TextFieldSelectContainerProps } from "./types/text-field-select-container-props.type";

/**
 * Text field select container component
 */
export function TextFieldSelectContainer(props: TextFieldSelectContainerProps) {

	const isHovered = useTextFieldIsHoveredStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	const onClick = useTextFieldSelectOnClickContext();
	const ref = useTextFieldSelectRefContext();

	return (
		<div
			onClick={onClick}
			onMouseEnter={textFieldEvents.onMouseEnter}
			onMouseLeave={textFieldEvents.onMouseLeave}
			ref={ref}
			style={textFieldSelectContainerStyle(isHovered)}
		>
			{props.children}
		</div>
	);
}
