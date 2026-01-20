/**
 * Describes an array of {@link T} with a min length of 1
 */
export type ArrayMinLength1<T> = [T, ...Array<T>];

/**
 * Describes an array of {@link T} with a min length of 2
 */
export type ArrayMinLength2<T> = [T, ...ArrayMinLength1<T>];

/**
 * Describes an array of {@link T} with a min length of 3
 */
export type ArrayMinLength3<T> = [T, ...ArrayMinLength2<T>];

/**
 * Describes an array of {@link T} with a min length of 4
 */
export type ArrayMinLength4<T> = [T, ...ArrayMinLength3<T>];

/**
 * Describes an array of {@link T} with a min length of 5
 */
export type ArrayMinLength5<T> = [T, ...ArrayMinLength4<T>];

/**
 * Describes an array of {@link T} with a min length of 6
 */
export type ArrayMinLength6<T> = [T, ...ArrayMinLength5<T>];

/**
 * Describes an array of {@link T} with a min length of 7
 */
export type ArrayMinLength7<T> = [T, ...ArrayMinLength6<T>];
