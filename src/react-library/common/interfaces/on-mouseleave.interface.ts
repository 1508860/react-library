import type { MouseEventHandler } from "react";

/**
 * For a component that has a mouseLeave event
 */
export interface IOnMouseLeave<TElement extends Element> {
	onMouseLeave: MouseEventHandler<TElement>;
}
