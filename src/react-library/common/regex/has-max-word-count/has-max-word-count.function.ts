import { REGEX_WORD_COUNT } from "../word-count/word-count.const";

/**
 * Check if a string has a maximum number of words in it
 * @param value
 * @param maxWordCount
 */
export function regexHasMaxWordCount(value: string, maxWordCount: number): boolean {
	return value.split(REGEX_WORD_COUNT).length <= maxWordCount;
}
