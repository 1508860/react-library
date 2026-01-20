/**
 * Type to restrict a number value to a non-negative interger
 * etc: 0, 1, 2, 2...
 */
export type NonnegativeInteger<T> = (
	T extends number ?
	(
		number extends T ? never :
		(
			// Exclude float, string, negative values
			T extends (`${string}.${string}` | `${T}` | `-${string}`) ? never : T
		)
	) : never
);
