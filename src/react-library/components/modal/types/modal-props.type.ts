import type { ModalBackdropColour } from "./modal-backdrop-colour.type";
import type { ModalBackgroundColour } from "./modal-background-colour.type";
import type { ModalChild } from "./modal-child.type";
import type { ModalDimensions } from "./modal-dimensions.type";
import type { ModalOnDismiss } from "./modal-on-dismiss.type";
import type { ModalPositionStrategyProps } from "./modal-position-strategy-props.type";

/**
 * Modal props
 */
export type ModalProps = (
	Partial<ModalBackdropColour> &
	Partial<ModalBackgroundColour> &
	Partial<ModalOnDismiss> &
	ModalChild &
	Partial<ModalDimensions> &
	ModalPositionStrategyProps
);
