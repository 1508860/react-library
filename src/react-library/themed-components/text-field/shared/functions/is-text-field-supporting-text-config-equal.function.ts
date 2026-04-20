import type { TextFieldSupportingTextConfig } from "../types/text-field-supporting-text-config.type";

/**
 * Compare two objects of type {@link TextFieldSupportingTextConfig} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isTextFieldSupportingTextConfigEqual(
	value1: TextFieldSupportingTextConfig | undefined,
	value2: TextFieldSupportingTextConfig | undefined
): boolean {
	return (
		(
			!value1 &&
			!value2
		) ||
		(
			!!value1 &&
			!!value2 &&
			value1.isErrored === value2.isErrored &&
			value1.text === value2.text
		)
	)
}
