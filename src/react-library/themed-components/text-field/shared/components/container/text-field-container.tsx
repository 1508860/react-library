import { TEXT_FIELD_CONTAINER_STYLE } from "./styles/text-field-container-style.const";
import type { TextFieldContainerProps } from "./types/text-field-container-props.type";

/**
 * Text field container component
 */
export function TextFieldContainer(props: TextFieldContainerProps) {
	return (
		<div style={TEXT_FIELD_CONTAINER_STYLE}>
			{props.children}
		</div>
	);
}
