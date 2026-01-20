import type { MouseEventHandler } from "react";

/**
 * For a component that has a mouseEnter event
 */
export interface IOnMouseEnter<TElement extends Element> {
	onMouseEnter: MouseEventHandler<TElement>;
}
