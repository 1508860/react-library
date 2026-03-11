import type { ModalBackdropColour } from "../../../types/modal-backdrop-colour.type";
import type { ModalOnDismiss } from "../../../types/modal-on-dismiss.type";

/**
 * Modal backdrop props
 */
export type ModalBackdropProps = (
	Partial<ModalBackdropColour> &
	Partial<ModalOnDismiss>
);
