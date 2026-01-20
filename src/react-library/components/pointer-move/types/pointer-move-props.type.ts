import type { PropsWithChildren } from "react";

import type { IIsDisabled, SuffixKeys } from "@react-library/common";

import type { PointerMoveOnChange } from "./pointer-move-on-change.type";

/**
 * Props for pointer move
 */
export type PointerMoveProps = (
	Partial<IIsDisabled> &
	SuffixKeys<PointerMoveOnChange, "Start"> &
	PointerMoveOnChange &
	SuffixKeys<PointerMoveOnChange, "End"> &
	PropsWithChildren
);
