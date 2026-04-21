/**
 * Check if a string has a minimum letter in it
 * @param value
 * @param minLength
 */
export function regexHasMinLength(value: string, minLength: number): boolean {
	return !!value.match(`/(?=.{${minLength},})/g`);
}
