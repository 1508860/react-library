import { REGEX_WORD_COUNT } from "./word-count.const";

/**
 * Determine a string's word count
 * @param value
 */
export function regexWordCount(value: string): number {
	return value.split(REGEX_WORD_COUNT).length;
}
