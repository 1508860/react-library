import { CHECKBOX_TARGET_CONTAINER_STYLE } from "./styles/checkbox-target-container-style.const";
import type { CheckboxTargetContainerProps } from "./types/checkbox-target-container-props.type";

/**
 * Checkbox target container
 */
export function CheckboxTargetContainer(props: CheckboxTargetContainerProps) {
	return (
		<div style={CHECKBOX_TARGET_CONTAINER_STYLE}>
			{props.children}
		</div>
	);
}
