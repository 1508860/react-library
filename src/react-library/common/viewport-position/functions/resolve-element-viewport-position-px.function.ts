import type { ViewportPositionPx } from "../types/viewport-position-px.type";

/**
 * Return a {@link ViewportPositionPx} from {@link element}
 * @param element
 * @param relativeToElement parent element (in the node tree) to track the {@link element} position relative to
 */
export function resolveElementViewportPositionPx(element: Element, relativeToElement: ViewportPositionPx): ViewportPositionPx {
	const elementDomRect = element.getBoundingClientRect();
	return {
		height: elementDomRect.height,
		marginBottom: (
			(relativeToElement.marginTop + relativeToElement.height) -
			(elementDomRect.top + elementDomRect.height)
		),
		marginLeft: (elementDomRect.left - relativeToElement.marginLeft),
		marginRight: (
			(relativeToElement.marginLeft + relativeToElement.width) -
			(elementDomRect.left + elementDomRect.width)
		),
		marginTop: (elementDomRect.top - relativeToElement.marginTop),
		width: elementDomRect.width
	};
}
