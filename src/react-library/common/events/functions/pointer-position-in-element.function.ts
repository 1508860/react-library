import type { IInset } from "../../interfaces";
import type { SizePx } from "../../units";

/**
 * Gets the pointer position relative to the element for an event
 * @param element
 * @param event
 */
export function pointerPositionInElement(element: Element, event: React.MouseEvent): IInset<SizePx> {
	const elementDomRect = element.getBoundingClientRect();
	return {
		bottom: elementDomRect.bottom - event.clientY,
		left: event.clientX - elementDomRect.left,
		right: elementDomRect.right - event.clientX,
		top: event.clientY - elementDomRect.top
	}
}
