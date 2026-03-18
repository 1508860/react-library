import { ButtonClick, ButtonContent, ButtonShape } from "../../../button";
import type { ButtonGroupClickProps } from "./types/button-group-click-props.type";

/**
 * Component to handle the button group click button
 * @param props
 */
export function ButtonGroupClick(props: ButtonGroupClickProps) {
	if (props.button.content === ButtonContent.Icon) return (
		<ButtonClick
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			iconWidth={props.button.iconWidth}
			isDisabled={props.button.isDisabled}
			onClick={props.button.onClick}
			shape={ButtonShape.Round}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);

	if (props.button.content === ButtonContent.IconLabel) return (
		<ButtonClick
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			label={props.button.label}
			onClick={props.button.onClick}
			shape={ButtonShape.Round}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);

	return (
		<ButtonClick
			content={props.button.content}
			isDisabled={props.button.isDisabled}
			label={props.button.label}
			onClick={props.button.onClick}
			shape={ButtonShape.Round}
			size={props.buttonGroup.size}
			style={props.buttonGroup.style}
		/>
	);
}
