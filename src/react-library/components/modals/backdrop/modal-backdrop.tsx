import { targetEvent } from "@react-library/common";

import { modalBackdropStyle } from "./styles/modal-backdrop-style.function";
import type { ModalBackdropProps } from "./types/modal-backdrop-props.type";

/**
 * Modal backdrop
 * @param props
 */
export function ModalBackdrop(props: ModalBackdropProps) {

	const clickCallback = (event: React.MouseEvent) => targetEvent(event, () => props.onDismiss ? props.onDismiss() : void 0);

	return (
		<div onClick={clickCallback} style={modalBackdropStyle(props.positionStrategy, props.backgroundColour)}>
			{props.children}
		</div>
	);
}
