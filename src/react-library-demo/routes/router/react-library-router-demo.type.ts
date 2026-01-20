/**
 * React library router demo types
 */
export const ReactLibraryRouterDemo = {
	"Basic": "ReactLibraryRouterDemo-Basic",
} as const satisfies Record<string, string>;

/**
 * Type for {@link ReactLibraryRouterDemo}
 */
export type ReactLibraryRouterDemo = (typeof ReactLibraryRouterDemo)[keyof typeof ReactLibraryRouterDemo];
