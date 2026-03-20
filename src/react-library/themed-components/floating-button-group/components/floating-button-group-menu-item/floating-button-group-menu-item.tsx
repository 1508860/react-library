import { ColourSchemeStyleStandardToContainer } from "@react-library/common";

import { ButtonContent, ButtonFloating, ButtonShape } from "../../../button";

import type { FloatingButtonGroupMenuItemProps } from "./types/floating-button-group-menu-item-props.type";

/**
 * Floating button group menu item component
 * @param props
 */
export function FloatingButtonGroupMenuItem(props: FloatingButtonGroupMenuItemProps) {
	if (props.content.content === ButtonContent.IconLabel) return (
		<ButtonFloating
			colourSchemeStyle={ColourSchemeStyleStandardToContainer[props.colourSchemeStyle]}
			content={props.content.content}
			iconName={props.content.iconName}
			iconStyle={props.content.iconStyle}
			isDisabled={props.isDisabled}
			key={props.content.content}
			label={props.content.label}
			onClick={props.onClick}
			shape={ButtonShape.Round}
			size={props.size}
		/>
	);

	return (
		<ButtonFloating
			colourSchemeStyle={ColourSchemeStyleStandardToContainer[props.colourSchemeStyle]}
			content={props.content.content}
			isDisabled={props.isDisabled}
			key={props.content.content}
			label={props.content.label}
			onClick={props.onClick}
			shape={ButtonShape.Round}
			size={props.size}
		/>
	);
}
