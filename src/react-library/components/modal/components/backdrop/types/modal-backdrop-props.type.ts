import type { ModalChild } from "react-library/components/modal/types/modal-child.type";
import type { ModalBackdropColour } from "../../../types/modal-backdrop-colour.type";
import type { ModalBackdropOpacity } from "../../../types/modal-backdrop-opacity.type";
import type { ModalOnDismiss } from "../../../types/modal-on-dismiss.type";
import type { ModalPositionStrategyProps } from "../../../types/modal-position-strategy-props.type";

/**
 * Modal backdrop props
 */
export type ModalBackdropProps = (
	Partial<ModalBackdropColour> &
	Partial<ModalBackdropOpacity> &
	ModalChild &
	Partial<ModalOnDismiss> &
	ModalPositionStrategyProps
);
