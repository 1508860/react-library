import type {
	Colour,
	IBackgroundColour,
	IHeight,
	IPositionStrategy,
	IProps,
	IWidth,
	PositionStrategyInternalAll,
	PrefixKeys,
	Size
} from "@react-library/common";

import type { ModalBackdropPropsPublic } from "../../backdrop/types/modal-backdrop-props.type";
import type { ModalChildren } from "../../shared/types/modal-children.type";

/**
 * Props for the modal component
 */
export type ModalProps = (
	Partial<IBackgroundColour<Colour>> &
	IHeight<Size> &
	ModalChildren &
	IPositionStrategy<PositionStrategyInternalAll<Size, Size>> &
	PrefixKeys<IProps<ModalBackdropPropsPublic>, "backdrop"> &
	IWidth<Size>
);
