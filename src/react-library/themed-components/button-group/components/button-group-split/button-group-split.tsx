import { ButtonContent, ButtonSplit } from "../../../button";
import type { ButtonGroupSplitProps } from "./types/button-group-split-props.type";

/**
 * Component to handle the button group split button
 * @param props
 */
export function ButtonGroupSplit(props: ButtonGroupSplitProps) {
	if (props.button.content === ButtonContent.Icon) return (
		<ButtonSplit
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			menuElement={props.button.menuElement}
			onClick={props.button.onClick}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);

	if (props.button.content === ButtonContent.IconLabel) return (
		<ButtonSplit
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			label={props.button.label}
			menuElement={props.button.menuElement}
			onClick={props.button.onClick}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);

	return (
		<ButtonSplit
			content={props.button.content}
			isDisabled={props.button.isDisabled}
			label={props.button.label}
			menuElement={props.button.menuElement}
			onClick={props.button.onClick}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);
}
