import type { IChild } from "@react-library/common";

/**
 * Describes virtual scroll props for children
 */
export type VirtualScrollPropsChildren = (
	Partial<IChild<VirtualScrollChildren>>
);

/**
 * Describes virtual scroll children result
 * - The child result is not intended to render anything on sceen, only allow access to hooks within the virtual scroll
 */
export type VirtualScrollChildren = undefined;
