import { REGEX_HAS_SPECIAL_CHARACTER } from "./has-special-character.const";

/**
 * Check if a string has a special character letter in it
 * @param value
 */
export function regexHasSpecialCharacter(value: string): boolean {
	return !!value.match(REGEX_HAS_SPECIAL_CHARACTER);
}
