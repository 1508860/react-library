/**
 * Type to restrict a number value to a natural integer
 * etc: 1, 2, 3...
 * Note: excludes 0
 */
export type NaturalInteger<T> = (
	T extends number ?
	(
		number extends T ? never :
		(
			// Exclude float, string, negative values
			T extends (`${string}.${string}` | `${T}` | `-${string}`) ? never : T
		)
	) : never
);
