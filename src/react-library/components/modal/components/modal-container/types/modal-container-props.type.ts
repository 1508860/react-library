import type { ModalBackgroundColour } from "../../../types/modal-background-colour.type";
import type { ModalChild } from "../../../types/modal-child.type";
import type { ModalDimensions } from "../../../types/modal-dimensions.type";
import type { ModalPositionStrategyProps } from "../../../types/modal-position-strategy-props.type";

/**
 * Modal container props
 */
export type ModalContainerProps = (
	ModalBackgroundColour &
	ModalChild &
	ModalDimensions &
	ModalPositionStrategyProps
);
