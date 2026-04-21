import { REGEX_HAS_WHITESPACE } from "./has-whitespace.const";

/**
 * Check if a string has a whitespace letter in it
 */
export function regexHasWhitespace(value: string): boolean {
	return !!value.match(REGEX_HAS_WHITESPACE);
}
