import { REGEX_HAS_UPPERCASE } from "./has-uppercase.const";

/**
 * Check if a string has an uppercase letter in it
 */
export function regexHasUppercase(value: string): boolean {
	return !!value.match(REGEX_HAS_UPPERCASE);
}
