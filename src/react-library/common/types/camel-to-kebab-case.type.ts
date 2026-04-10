/**
 * Type to convert camel case to kebab case
 */
export type CamelToKebabCase<S extends string> = (
	S extends `${infer T}${infer U}` ?
	(
		U extends Uncapitalize<U> ?
		`${Uncapitalize<T>}${CamelToKebabCase<U>}` :
		`${Uncapitalize<T>}-${CamelToKebabCase<U>}`
	) : ""
);
