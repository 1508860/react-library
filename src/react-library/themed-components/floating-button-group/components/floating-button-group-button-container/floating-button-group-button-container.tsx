import { useFloatingButtonGroupPositionContext } from "../../hooks/virtual-scroll-item-unregister-context.hook";

import { floatingButtonGroupButtonContainerStyle } from "./styles/floating-button-group-button-container.function";
import type { FloatingButtonGroupButtonContainerProps } from "./types/floating-button-group-button-container-props.type";

/**
 * Floating button group button container component
 * @param props
 */
export function FloatingButtonGroupButtonContainer(props: FloatingButtonGroupButtonContainerProps) {

	const position = useFloatingButtonGroupPositionContext();

	return (
		<div style={floatingButtonGroupButtonContainerStyle(position)}>
			{props.children}
		</div>
	);
}
