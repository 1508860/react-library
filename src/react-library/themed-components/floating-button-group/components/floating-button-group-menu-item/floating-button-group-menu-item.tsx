import { ColourSchemeStyleStandardToContainer } from "@react-library/common";

import { ButtonFloating, ButtonShape } from "../../../button";

import type { FloatingButtonGroupMenuItemProps } from "./types/floating-button-group-menu-item-props.type";

/**
 * Floating button group menu item component
 * @param props
 */
export function FloatingButtonGroupMenuItem(props: FloatingButtonGroupMenuItemProps) {
	return (
		<ButtonFloating
			colourSchemeStyle={ColourSchemeStyleStandardToContainer[props.colourSchemeStyle]}
			content={props.content}
			isDisabled={props.isDisabled}
			key={props.content.content}
			onClick={props.onClick}
			shape={ButtonShape.Round}
			size={props.size}
		/>
	);
}
