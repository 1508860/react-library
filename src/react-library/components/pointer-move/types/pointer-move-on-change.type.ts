import type { IOnChange } from "@react-library/common";

import type { PointerMoveOnChangeResult } from "./pointer-move-on-change-result.type";

/**
 * Type for the on change event for a pointer move
 */
export type PointerMoveOnChange =  IOnChange<PointerMoveOnChangeResult, void>
