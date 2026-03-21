/**
 * React library material icons demo types
 */
export const ReactLibraryMaterialIconsDemo = {
	"Default": "ReactLibraryMaterialIconsDemo-Default",
	"DefaultFilled": "ReactLibraryMaterialIconsDemo-DefaultFilled",
	"Thick": "ReactLibraryMaterialIconsDemo-Thick"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ReactLibraryMaterialIconsDemo}
 */
export type ReactLibraryMaterialIconsDemo = (typeof ReactLibraryMaterialIconsDemo)[keyof typeof ReactLibraryMaterialIconsDemo];
