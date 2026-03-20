import { ButtonContent, ButtonFloating, ButtonShape } from "../../../button";

import { FloatingButtonGroupButtonContainer } from "../floating-button-group-button-container";

import type { FloatingButtonGroupDefaultProps } from "./types/floating-button-group-default-props.type";

/**
 * Floating button group default component
 * @param props
 */
export function FloatingButtonGroupDefault(props: FloatingButtonGroupDefaultProps) {

	if (props.content.content === ButtonContent.Icon) return (
		<FloatingButtonGroupButtonContainer key={props.content.content}>
			<ButtonFloating
				colourSchemeStyle={props.colourSchemeStyle}
				content={props.content.content}
				iconName={props.content.iconName}
				iconStyle={props.content.iconStyle}
				isDisabled={props.isDisabled}
				onClick={props.onClick}
				shape={ButtonShape.Soft}
				size={props.size}
			/>
		</FloatingButtonGroupButtonContainer>
	);

	if (props.content.content === ButtonContent.IconLabel) return (
		<FloatingButtonGroupButtonContainer key={props.content.content}>
			<ButtonFloating
				colourSchemeStyle={props.colourSchemeStyle}
				content={props.content.content}
				iconName={props.content.iconName}
				iconStyle={props.content.iconStyle}
				isDisabled={props.isDisabled}
				label={props.content.label}
				onClick={props.onClick}
				shape={ButtonShape.Soft}
				size={props.size}
			/>
		</FloatingButtonGroupButtonContainer>
	);

	return (
		<FloatingButtonGroupButtonContainer key={props.content.content}>
			<ButtonFloating
				colourSchemeStyle={props.colourSchemeStyle}
				content={props.content.content}
				isDisabled={props.isDisabled}
				label={props.content.label}
				onClick={props.onClick}
				shape={ButtonShape.Soft}
				size={props.size}
			/>
		</FloatingButtonGroupButtonContainer>
	);
}
