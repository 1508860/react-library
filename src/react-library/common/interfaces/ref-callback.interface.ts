import type { RefCallback } from "react";

/**
 * For a component that has a ref callback
 */
export interface IRefCallback<TRefCallback> {
	ref: RefCallback<TRefCallback>;
}
