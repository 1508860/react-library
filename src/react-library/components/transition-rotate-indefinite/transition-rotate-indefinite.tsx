import { transitionRotateIndefiniteContainerStyle } from "./styles/transition-rotate-indefinite-container-style.function";
import "./styles/transition-rotate-indefinite.css";
import type { TransitionRotateIndefiniteProps } from "./types/transition-rotate-indefinite-props.type";

/**
 * Component for handling an indefinite rotation
 * @param props
 */
export function TransitionRotateIndefinite(props: TransitionRotateIndefiniteProps) {

	return (
		<div
			key="transition-rotate-indefinite-container"
			style={transitionRotateIndefiniteContainerStyle(props)}
		>
			{props.children}
		</div>
	);
}
