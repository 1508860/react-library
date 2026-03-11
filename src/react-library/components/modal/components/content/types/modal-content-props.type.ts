import type { ModalBackgroundColour } from "../../../types/modal-background-colour.type";
import type { ModalChild } from "../../../types/modal-child.type";
import type { ModalDimensions } from "../../../types/modal-dimensions.type";
import type { ModalPositionStrategyProps } from "../../../types/modal-position-strategy-props.type";

/**
 * Modal content props
 */
export type ModalContentProps = (
	Partial<ModalBackgroundColour> &
	ModalChild &
	Partial<ModalDimensions> &
	ModalPositionStrategyProps
);
