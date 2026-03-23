import { ButtonFloating, ButtonShape } from "../../../button";

import { FloatingButtonGroupButtonContainer } from "../floating-button-group-button-container";

import type { FloatingButtonGroupDefaultProps } from "./types/floating-button-group-default-props.type";

/**
 * Floating button group default component
 * @param props
 */
export function FloatingButtonGroupDefault(props: FloatingButtonGroupDefaultProps) {
	return (
		<FloatingButtonGroupButtonContainer key={props.content.content}>
			<ButtonFloating
				colourSchemeStyle={props.colourSchemeStyle}
				content={props.content}
				isDisabled={props.isDisabled}
				onClick={props.onClick}
				shape={ButtonShape.Soft}
				size={props.size}
			/>
		</FloatingButtonGroupButtonContainer>
	);
}
