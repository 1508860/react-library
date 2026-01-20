import type {
	ArrayFixedLength1,
	ArrayFixedLength2,
	ArrayFixedLength3,
	ArrayFixedLength4,
	ArrayFixedLength5,
	ArrayFixedLength6,
	ArrayFixedLength7
} from "./array-fixed-length.type";

/**
 * Describes an array of {@link T} with a max length of 1
 */
export type ArrayMaxLength1<T> = ArrayFixedLength1<T>;

/**
 * Describes an array of {@link T} with a max length of 2
 */
export type ArrayMaxLength2<T> = (ArrayMaxLength1<T> | ArrayFixedLength2<T>);

/**
 * Describes an array of {@link T} with a max length of 3
 */
export type ArrayMaxLength3<T> = (ArrayMaxLength2<T> | ArrayFixedLength3<T>);

/**
 * Describes an array of {@link T} with a max length of 4
 */
export type ArrayMaxLength4<T> = (ArrayMaxLength3<T> | ArrayFixedLength4<T>);

/**
 * Describes an array of {@link T} with a max length of 5
 */
export type ArrayMaxLength5<T> = (ArrayMaxLength4<T> | ArrayFixedLength5<T>);

/**
 * Describes an array of {@link T} with a max length of 6
 */
export type ArrayMaxLength6<T> = (ArrayMaxLength5<T> | ArrayFixedLength6<T>);

/**
 * Describes an array of {@link T} with a max length of 7
 */
export type ArrayMaxLength7<T> = (ArrayMaxLength6<T> | ArrayFixedLength7<T>);
