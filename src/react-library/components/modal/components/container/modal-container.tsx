import { modalContainerStyle } from "./styles/modal-container-style.function";
import type { ModalContainerProps } from "./types/modal-container-props.type";

/**
 * Modal container
 * @param props
 */
export function ModalContainer(props: ModalContainerProps) {
	return (
		<div style={modalContainerStyle(props.positionStrategy)}>
			{props.children}
		</div>
	);
}
