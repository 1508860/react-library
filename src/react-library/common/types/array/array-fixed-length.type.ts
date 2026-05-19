/**
 * Describes an array of {@link T} with a length of 1
 */
export type ArrayFixedLength1<T> = [T];

/**
 * Describes an array of {@link T} with a length of 2
 */
export type ArrayFixedLength2<T> = [T, ...ArrayFixedLength1<T>];

/**
 * Describes an array of {@link T} with a length of 3
 */
export type ArrayFixedLength3<T> = [T, ...ArrayFixedLength2<T>];

/**
 * Describes an array of {@link T} with a length of 4
 */
export type ArrayFixedLength4<T> = [T, ...ArrayFixedLength3<T>];

/**
 * Describes an array of {@link T} with a length of 5
 */
export type ArrayFixedLength5<T> = [T, ...ArrayFixedLength4<T>];

/**
 * Describes an array of {@link T} with a length of 6
 */
export type ArrayFixedLength6<T> = [T, ...ArrayFixedLength5<T>];

/**
 * Describes an array of {@link T} with a length of 7
 */
export type ArrayFixedLength7<T> = [T, ...ArrayFixedLength6<T>];

/**
 * Describes an array of {@link T} with a length of 8
 */
export type ArrayFixedLength8<T> = [T, ...ArrayFixedLength7<T>];

/**
 * Describes an array of {@link T} with a length of 9
 */
export type ArrayFixedLength9<T> = [T, ...ArrayFixedLength8<T>];

/**
 * Describes an array of {@link T} with a length of 10
 */
export type ArrayFixedLength10<T> = [T, ...ArrayFixedLength9<T>];

/**
 * Describes an array of {@link T} with a length of 11
 */
export type ArrayFixedLength11<T> = [T, ...ArrayFixedLength10<T>];

/**
 * Describes an array of {@link T} with a length of 12
 */
export type ArrayFixedLength12<T> = [T, ...ArrayFixedLength11<T>];
