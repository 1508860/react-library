import type {
	ArrayFixedLength1,
	ArrayFixedLength10,
	ArrayFixedLength11,
	ArrayFixedLength12,
	ArrayFixedLength2,
	ArrayFixedLength3,
	ArrayFixedLength4,
	ArrayFixedLength5,
	ArrayFixedLength6,
	ArrayFixedLength7,
	ArrayFixedLength8,
	ArrayFixedLength9
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

/**
 * Describes an array of {@link T} with a max length of 8
 */
export type ArrayMaxLength8<T> = (ArrayMaxLength7<T> | ArrayFixedLength8<T>);

/**
 * Describes an array of {@link T} with a max length of 9
 */
export type ArrayMaxLength9<T> = (ArrayMaxLength8<T> | ArrayFixedLength9<T>);

/**
 * Describes an array of {@link T} with a max length of 10
 */
export type ArrayMaxLength10<T> = (ArrayMaxLength9<T> | ArrayFixedLength10<T>);

/**
 * Describes an array of {@link T} with a max length of 11
 */
export type ArrayMaxLength11<T> = (ArrayMaxLength10<T> | ArrayFixedLength11<T>);

/**
 * Describes an array of {@link T} with a max length of 12
 */
export type ArrayMaxLength12<T> = (ArrayMaxLength11<T> | ArrayFixedLength12<T>);
