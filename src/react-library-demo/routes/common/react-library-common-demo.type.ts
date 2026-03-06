/**
 * React library common demo types
 */
export const ReactLibraryCommonDemo = {
	"Date": "ReactLibraryCommonDemo-Date",
} as const satisfies Record<string, string>;

/**
 * Type for {@link ReactLibraryCommonDemo}
 */
export type ReactLibraryCommonDemo = (typeof ReactLibraryCommonDemo)[keyof typeof ReactLibraryCommonDemo];
