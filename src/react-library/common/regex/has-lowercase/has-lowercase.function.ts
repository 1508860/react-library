import { REGEX_HAS_LOWERCASE } from "./has-lowercase.const";

/**
 * Check if a string has a lowercase letter in it
 *  @param value
 */
export function regexHasLowercase(value: string): boolean {
	return !!value.match(REGEX_HAS_LOWERCASE);
}
