import type { UIEventHandler } from "react";

/**
 * Describes a component that has an on scroll events
 */
export interface IOnScroll<TElement extends Element> {
	onScroll: UIEventHandler<TElement>;
}
