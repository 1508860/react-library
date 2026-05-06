import type { MenuItemColourState } from "../types/menu-item-colour-state.type";

/**
 * Compare two objects of type {@link MenuItemColourState} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isMenuItemColourStateEqual(value1: MenuItemColourState, value2: MenuItemColourState): boolean {
	return (
		value1.background?.toColourString() === value2.background?.toColourString() &&
		value1.hover.toColourString() === value2.hover.toColourString() &&
		value1.icon.toColourString() === value2.icon.toColourString() &&
		value1.pulse.toColourString() === value2.pulse.toColourString() &&
		value1.supportingText.toColourString() === value2.supportingText.toColourString() &&
		value1.text.toColourString() === value2.text.toColourString() &&
		value1.title.toColourString() === value2.title.toColourString()
	);
}
