import { BUTTON_SPLIT_CONTAINER_STYLE } from "./styles/button-split-container-style.const";
import type { ButtonSplitContainerProps } from "./types/button-split-container-props.type";

/**
 * Component to handle the button split container
 * @param props
 */
export function ButtonSplitContainer(props: ButtonSplitContainerProps) {
	return (
		<div
			style={BUTTON_SPLIT_CONTAINER_STYLE}
		>
			{props.children}
		</div>
	);
}
