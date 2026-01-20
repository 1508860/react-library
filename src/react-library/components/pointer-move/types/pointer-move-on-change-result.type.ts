import type { IPagePosition, IPosition, PrefixKeys } from "@react-library/common";

/**
 * Describes the result for a pointer move change event
 */
export type PointerMoveOnChangeResult = (
	PrefixKeys<IPosition<IPagePosition>, "current"> &
	PrefixKeys<IPosition<IPagePosition>, "initial">
);
