import { REGEX_HAS_NUMERIC } from "./has-numeric.const";

/**
 * Check if a string has a numeric letter in it
 * @param value
 */
export function regexHasNumeric(value: string): boolean {
	return !!value.match(REGEX_HAS_NUMERIC);
}
