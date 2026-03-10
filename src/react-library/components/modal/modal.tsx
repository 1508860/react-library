import { createPortal } from "react-dom";

import { useOverlayPortalContext } from "../overlay-portal";

import { ModalBackdrop } from "./components/backdrop";
import { ModalContainer } from "./components/modal-container";
import type { ModalProps } from "./types/modal-props.type";

/**
 * Modal component for displaying components over app content using the overlay portal
 * @param props
 */
export function Modal(props: ModalProps) {

	// Overlay portal
	const overlayPortal = useOverlayPortalContext();

	return createPortal(
		(
			<ModalBackdrop
				backdropColour={props.backdropColour}
				backdropOpacity={props.backdropOpacity}
				onDismiss={props.onDismiss}
				positionStrategy={props.positionStrategy}
			>
				<ModalContainer
					backgroundColour={props.backgroundColour}
					height={props.height}
					positionStrategy={props.positionStrategy}
					width={props.width}
				>
					{props.children}
				</ModalContainer>
			</ModalBackdrop>
		),
		overlayPortal
	);
}
