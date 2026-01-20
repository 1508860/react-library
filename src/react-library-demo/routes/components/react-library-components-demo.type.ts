/**
 * React library component demo types
 */
export const ReactLibraryComponentsDemo = {
	"InputCurrency": "ReactLibraryComponentsDemo-InputCurrency",
	"ViewDivider": "ReactLibraryComponentsDemo-ViewDivider",
	"VirtualScroll": "ReactLibraryComponentsDemo-VirtualScroll"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ReactLibraryComponentsDemo}
 */
export type ReactLibraryComponentsDemo = (typeof ReactLibraryComponentsDemo)[keyof typeof ReactLibraryComponentsDemo];
