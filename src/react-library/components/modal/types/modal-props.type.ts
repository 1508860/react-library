import type {
	IBackdrop,
	IChild,
	IContentConfig,
	IPositionStrategy
} from "@react-library/common";

import type { ModalBackdropElement } from "./modal-backdrop-element.type";
import type { ModalChildElement } from "./modal-child-element.type";
import type { ModalContentConfig } from "./modal-content-config.type";
import type { ModalPositionStrategyInternal } from "./modal-position-strategy-internal.type";

/**
 * Modal props
 */
export type ModalProps = (
	Partial<IBackdrop<ModalBackdropElement>> &
	IChild<ModalChildElement> &
	Partial<IContentConfig<ModalContentConfig>> &
	IPositionStrategy<ModalPositionStrategyInternal>
);
