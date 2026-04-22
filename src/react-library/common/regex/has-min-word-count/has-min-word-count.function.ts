import { REGEX_WORD_COUNT } from "../word-count/word-count.const";

/**
 * Check if a string has a minimum number of words in it
 * @param value
 * @param minWordCount
 */
export function regexHasMinWordCount(value: string, minWordCount: number): boolean {
	return value.split(REGEX_WORD_COUNT).length >= minWordCount;
}
