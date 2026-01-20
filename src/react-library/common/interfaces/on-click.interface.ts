import type { MouseEventHandler } from "react";

/**
 * For a component that has a click event
 */
export interface IOnClick<TElement extends Element> {
	onClick: MouseEventHandler<TElement>;
}
