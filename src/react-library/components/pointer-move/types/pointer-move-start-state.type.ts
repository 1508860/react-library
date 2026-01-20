import type { IId, IPagePosition, IPosition, IType, PrefixKeys } from "@react-library/common";
import type { PointerMoveInteraction } from "../enums/pointer-move-iteraction.type";

/**
 * Base start state for pointer move
 */
type PointerMoveStartStateBase<TPointerMoveInteraction extends PointerMoveInteraction> = (
	IPosition<IPagePosition> &
	PrefixKeys<IType<TPointerMoveInteraction>, "interaction">
);

/**
 * Start state for pointer move which is maintained as a reference for the duration of the pointer being moved
 * For mouse state
 */
export type PointerMoveStartStateMouse = (
	PointerMoveStartStateBase<typeof PointerMoveInteraction.Mouse>
);

/**
 * Start state for pointer move which is maintained as a reference for the duration of the pointer being moved
 * For touch state
 */
export type PointerMoveStartStateTouch = (
	PrefixKeys<IId<number>, "touch"> &
	PointerMoveStartStateBase<typeof PointerMoveInteraction.Touch>
);

/**
 * Start state for pointer move which is maintained as a reference for the duration of the pointer being moved
 */
export type PointerMoveStartState = (
	PointerMoveStartStateMouse |
	PointerMoveStartStateTouch
);
