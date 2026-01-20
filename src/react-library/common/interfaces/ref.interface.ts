import type { Ref } from "react";

/**
 * For a component that has a ref
 */
export interface IRef<TRef> {
	ref: Ref<TRef>;
}
