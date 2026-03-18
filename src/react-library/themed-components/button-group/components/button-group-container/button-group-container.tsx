import { buttonGroupContainerStyle } from "./styles/button-group-container-style.function";
import type { ButtonGroupContainerProps } from "./types/button-group-container-props.type";

/**
 * Component to handle the button group container
 * @param props
 */
export function ButtonGroupContainer(props: ButtonGroupContainerProps) {
	return (
		<div style={buttonGroupContainerStyle(props.buttonGroup)}>
			{props.children}
		</div>
	);
}
