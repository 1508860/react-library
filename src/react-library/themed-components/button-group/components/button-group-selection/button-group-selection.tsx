import { ButtonContent, ButtonSelection } from "../../../button";
import type { ButtonGroupSelectionProps } from "./types/button-group-selection-props.type";

/**
 * Component to handle the button group selection button
 * @param props
 */
export function ButtonGroupSelection(props: ButtonGroupSelectionProps) {
	if (props.button.content === ButtonContent.Icon) return (
		<ButtonSelection
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			iconWidth={props.button.iconWidth}
			isDisabled={props.button.isDisabled}
			isSelected={props.button.isSelected}
			onClick={props.button.onClick}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);

	if (props.button.content === ButtonContent.IconLabel) return (
		<ButtonSelection
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			isSelected={props.button.isSelected}
			label={props.button.label}
			onClick={props.button.onClick}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);

	return (
		<ButtonSelection
			content={props.button.content}
			isDisabled={props.button.isDisabled}
			isSelected={props.button.isSelected}
			label={props.button.label}
			onClick={props.button.onClick}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);
}
