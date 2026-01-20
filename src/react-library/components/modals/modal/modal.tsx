import { createPortal } from "react-dom";

import { useOverlayPortalContext } from "../../overlay-portal";

import { ModalBackdrop } from "../backdrop/modal-backdrop";
import { modalStyle } from "./styles/modal-style.function";
import type { ModalProps } from "./types/modal-props.type";

/**
 * Modal component that projects child elements in to a modal portal
 * @param props
 */
export function Modal(props: ModalProps) {

	// Overlay portal
	const overlayPortal = useOverlayPortalContext();

	return createPortal(
		(
			<ModalBackdrop
				backgroundColour={props.backdropProps.backgroundColour}
				onDismiss={props.backdropProps.onDismiss}
				positionStrategy={props.positionStrategy}
			>
				<div style={modalStyle(props.height, props.width, props.positionStrategy, props.backgroundColour)}>
					{props.children}
				</div>
			</ModalBackdrop>
		),
		overlayPortal
	);
}
