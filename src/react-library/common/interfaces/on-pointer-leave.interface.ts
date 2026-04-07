import type { PointerEventHandler } from "react";

/**
 * For a component that has a pointer leave event
 */
export interface IOnPointerLeave<TElement extends Element> {
	onPointerLeave: PointerEventHandler<TElement>;
}
