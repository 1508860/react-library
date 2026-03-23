import { ButtonClick, ButtonShape } from "../../../button";
import type { ButtonGroupClickProps } from "./types/button-group-click-props.type";

/**
 * Component to handle the button group click button
 * @param props
 */
export function ButtonGroupClick(props: ButtonGroupClickProps) {
	return (
		<ButtonClick
			content={props.button.content}
			isDisabled={props.button.isDisabled}
			onClick={props.button.onClick}
			shape={ButtonShape.Round}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);
}
