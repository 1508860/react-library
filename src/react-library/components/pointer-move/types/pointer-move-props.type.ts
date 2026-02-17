import type { PropsWithChildren } from "react";

import type { IIsDisabled } from "@react-library/common";

import type {
	PointerMoveOnChange,
	PointerMoveOnChangeEnd,
	PointerMoveOnChangeStart
} from "./pointer-move-on-change.type";

/**
 * Props for pointer move
 */
export type PointerMoveProps = (
	Partial<IIsDisabled> &
	PointerMoveOnChange &
	PointerMoveOnChangeStart &
	PointerMoveOnChangeEnd &
	PropsWithChildren
);
