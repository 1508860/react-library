import { transitionRotateContainerStyle } from "./styles/transition-rotate-container-style.function";
import type { TransitionRotateProps } from "./types/transition-rotate-props.type";

/**
 * Component for handling a rotation
 * @param props
 */
export function TransitionRotate(props: TransitionRotateProps) {
	return (
		<div style={transitionRotateContainerStyle(props)}>
			{props.children}
		</div>
	);
}
