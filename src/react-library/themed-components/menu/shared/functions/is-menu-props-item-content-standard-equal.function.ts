import type { MenuPropsItemContentStandard } from "../types/menu-props-item-content.type";

/**
 * Compare two objects of type {@link MenuPropsItemContentStandard} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isMenuPropsItemContentStandardEqual(value1: MenuPropsItemContentStandard, value2: MenuPropsItemContentStandard): boolean {
	return (
		value1.content === value2.content &&
		value1.id === value2.id &&
		value1.isDisabled === value2.isDisabled &&
		value1.leadingIconName === value2.leadingIconName &&
		value1.onSelect === value2.onSelect &&
		value1.supportingText === value2.supportingText &&
		value1.text === value2.text &&
		value1.trailingIconName === value2.trailingIconName
	);
}
