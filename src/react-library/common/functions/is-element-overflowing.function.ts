/**
 * Function to determine if the content of an element is overflowing horizontally or vertically
 * @param element
 */
export function isElementOvervlowing(element: Element): boolean {
	return (
		isElementOvervlowingHorizontal(element) ||
		isElementOvervlowingVertical(element)
	);
}

/**
 * Function to determine if the content of an element is overflowing horizontally
 * @param element
 */
export function isElementOvervlowingHorizontal(element: Element): boolean {
	console.log(element.clientWidth, element.scrollWidth);
	return element.clientWidth < element.scrollWidth;
}

/**
 * Function to determine if the content of an element is overflowing vertically
 * @param element
 */
export function isElementOvervlowingVertical(element: Element): boolean {
	return element.clientHeight < element.scrollHeight;
}
