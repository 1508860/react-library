import type { IOnChangeStart, IOnChange, IOnChangeEnd } from "@react-library/common";

import type { PointerMoveOnChangeResult } from "./pointer-move-on-change-result.type";

/**
 * Type for the on start change event for a pointer move
 */
export type PointerMoveOnChangeStart = IOnChangeStart<PointerMoveOnChangeResult, void>;

/**
 * Type for the on change event for a pointer move
 */
export type PointerMoveOnChange = IOnChange<PointerMoveOnChangeResult, void>;

/**
 * Type for the on end change event for a pointer move
 */
export type PointerMoveOnChangeEnd = IOnChangeEnd<PointerMoveOnChangeResult, void>;
