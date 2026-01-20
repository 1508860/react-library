/**
 * Key remapper to prefix the keys of a type with a string value
 * Note: In camel case
 */
export type PrefixKeys<TType, TPrefix extends string> = {
	[K in keyof TType as `${TPrefix}${Capitalize<string & K>}`]: TType[K];
};
