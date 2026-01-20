/**
 * Key remapper to suffix the keys of a type with a string value
 * Note: In camel case
 */
export type SuffixKeys<TType, TSuffix extends string> = {
	[K in keyof TType as `${string & K}${Capitalize<TSuffix>}`]: TType[K];
};
