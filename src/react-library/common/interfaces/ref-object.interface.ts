import type { RefObject } from "react";

/**
 * For a component that has a ref object
 */
export interface IRefObject<TRef> {
	ref: RefObject<TRef>;
}
