import type { PointerEventHandler } from "react";

/**
 * For a component that has a pointer enter event
 */
export interface IOnPointerEnter<TElement extends Element> {
	onPointerEnter: PointerEventHandler<TElement>;
}
