import { modalContentStyle } from "./styles/modal-content-style.function";
import type { ModalContentProps } from "./types/modal-content-props.type";

/**
 * Modal content
 * @param props
 */
export function ModalContent(props: ModalContentProps) {
	return (
		<div style={modalContentStyle(props.contentConfig, props.positionStrategy)}>
			{props.children}
		</div>
	);
}
