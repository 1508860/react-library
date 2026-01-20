/**
 * Material icon style
 */
export const MaterialIconStyle = {
	Default: "default",
	Thick: "thick"
} as const satisfies Record<string, string>;

/**
 * Type for {@link MaterialIconStyle}
 */
export type MaterialIconStyle = (typeof MaterialIconStyle)[keyof typeof MaterialIconStyle];
