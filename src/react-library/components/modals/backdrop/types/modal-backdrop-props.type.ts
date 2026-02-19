import type { PropsWithChildren } from "react";

import type {
	Callback,
	Colour,
	IBackgroundColour,
	IOnDismiss,
	IPositionStrategy,
	PositionStrategyInternalAll,
	Size
} from "@react-library/common";

/**
 * Modal backdrop props that are only used internally within the modal hierarchy
 * Not to be exposed to the consumer
 */
type ModalBackdropPropsPrivate = (
	IPositionStrategy<PositionStrategyInternalAll<Size, Size>> &
	PropsWithChildren
);

/**
 * Modal backdrop props that should be exposed to the consumer for configuration
 */
export type ModalBackdropPropsPublic = (
	Partial<IBackgroundColour<Colour>> &
	Partial<IOnDismiss<Callback<void>>>
);

/**
 * Full modal backdrop props from {@link ModalBackdropPropsPrivate} and {@link ModalBackdropPropsPublic}
 */
export type ModalBackdropProps = (
	ModalBackdropPropsPrivate &
	ModalBackdropPropsPublic
);
