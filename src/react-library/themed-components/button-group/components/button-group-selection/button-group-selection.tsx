import { ButtonSelection } from "../../../button";
import type { ButtonGroupSelectionProps } from "./types/button-group-selection-props.type";

/**
 * Component to handle the button group selection button
 * @param props
 */
export function ButtonGroupSelection(props: ButtonGroupSelectionProps) {
	return (
		<ButtonSelection
			content={props.button.content}
			isDisabled={props.button.isDisabled}
			isSelected={props.button.isSelected}
			onClick={props.button.onClick}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);
}
