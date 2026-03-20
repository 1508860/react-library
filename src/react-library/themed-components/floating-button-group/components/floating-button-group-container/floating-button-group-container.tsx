import { FLOATING_BUTTON_GROUP_CONTAINER_STYLE } from "./styles/floating-button-group-container-style.const";
import type { FloatingButtonGroupContainerProps } from "./types/floating-button-group-container-props.type";

/**
 * Floating button group container component
 * @param props
 */
export function FloatingButtonGroupContainer(props: FloatingButtonGroupContainerProps) {
	return (
		<div style={FLOATING_BUTTON_GROUP_CONTAINER_STYLE}>
			{props.children}
		</div>
	);
}
