import type {
	IChild,
	IContentConfig,
	IPositionStrategy
} from "@react-library/common";

import type { ModalChildElement } from "../../../types/modal-child-element.type";
import type { ModalContentConfig } from "../../../types/modal-content-config.type";
import type { ModalPositionStrategyInternal } from "../../../types/modal-position-strategy-internal.type";

/**
 * Modal content props
 */
export type ModalContentProps = (
	IChild<ModalChildElement> &
	Partial<IContentConfig<ModalContentConfig>> &
	IPositionStrategy<ModalPositionStrategyInternal>
);
