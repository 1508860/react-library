import type {
	Colour,
	IBackdropProps,
	IBackgroundColour,
	IHeight,
	IPositionStrategy,
	IWidth,
	PositionStrategyInternalAll,
	Size
} from "@react-library/common";

import type { ModalBackdropPropsPublic } from "../../backdrop/types/modal-backdrop-props.type";
import type { ModalChildren } from "../../shared/types/modal-children.type";

/**
 * Props for the modal component
 */
export type ModalProps = (
	IBackdropProps<ModalBackdropPropsPublic> &
	Partial<IBackgroundColour<Colour>> &
	IHeight<Size> &
	ModalChildren &
	IPositionStrategy<PositionStrategyInternalAll<Size, Size>> &
	IWidth<Size>
);
