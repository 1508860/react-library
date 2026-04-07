import type { PropsWithChildren } from "react";

import type { IPositionStrategy } from "@react-library/common";

import type { ModalPositionStrategyInternal } from "../../../types/modal-position-strategy-internal.type";

/**
 * Modal container props
 */
export type ModalContainerProps = (
	IPositionStrategy<ModalPositionStrategyInternal> &
	PropsWithChildren
);
