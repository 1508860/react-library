import { useTextFieldEventsContext } from "../../../shared/hooks/text-field-events-context.hook";
import { useTextFieldIsHoveredStateContext } from "../../../shared/hooks/text-field-is-hovered-state-context.hook";
import { useTextFieldOnClickContext } from "../../../shared/hooks/text-field-on-click-context.hook";

import { useTextFieldSelectRefContext } from "../../hooks/text-field-select-ref-context.hook";

import { textFieldSelectContainerStyle } from "./styles/text-field-select-container-style.function";
import type { TextFieldSelectContainerProps } from "./types/text-field-select-container-props.type";

/**
 * Text field select container component
 */
export function TextFieldSelectContainer(props: TextFieldSelectContainerProps) {

	const isHovered = useTextFieldIsHoveredStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	const onClick = useTextFieldOnClickContext();
	const ref = useTextFieldSelectRefContext();

	return (
		<div
			onClick={onClick}
			onPointerCancel={textFieldEvents.onPointerLeave}
			onPointerEnter={textFieldEvents.onPointerEnter}
			onPointerLeave={textFieldEvents.onPointerLeave}
			ref={ref}
			style={textFieldSelectContainerStyle(isHovered)}
		>
			{props.children}
		</div>
	);
}
