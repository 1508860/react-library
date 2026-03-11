import type { PropsWithChildren } from "react";

import type { ModalPositionStrategyProps } from "../../../types/modal-position-strategy-props.type";

/**
 * Modal container props
 */
export type ModalContainerProps = (
	ModalPositionStrategyProps &
	PropsWithChildren
);
