/**
 * For methods
 */
export const FormMethod = {
	Get: "get",
	Post: "post"
} as const satisfies Record<string, string>;

/**
 * Type for {@link FormMethod}
 */
export type FormMethod = (typeof FormMethod)[keyof typeof FormMethod];
