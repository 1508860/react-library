import { ButtonSplit } from "../../../button";
import type { ButtonGroupSplitProps } from "./types/button-group-split-props.type";

/**
 * Component to handle the button group split button
 * @param props
 */
export function ButtonGroupSplit(props: ButtonGroupSplitProps) {
	return (
		<ButtonSplit
			content={props.button.content}
			isDisabled={props.button.isDisabled}
			menuElement={props.button.menuElement}
			onClick={props.button.onClick}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);
}
