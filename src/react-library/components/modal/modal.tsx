import { createPortal } from "react-dom";

import { useOverlayPortalContext } from "../overlay-portal";

import { ModalBackdrop } from "./components/backdrop";
import { ModalContainer } from "./components/container";
import { ModalContent } from "./components/content";
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
			<ModalContainer positionStrategy={props.positionStrategy}>
				<ModalBackdrop
					backdropColour={props.backdropColour}
					backdropOpacity={props.backdropOpacity}
					key="backdrop"
					onDismiss={props.onDismiss}
				/>
				<ModalContent
					backgroundColour={props.backgroundColour}
					height={props.height}
					key="content"
					positionStrategy={props.positionStrategy}
					width={props.width}
				>
					{props.children}
				</ModalContent>
			</ModalContainer>
		),
		overlayPortal
	);
}
