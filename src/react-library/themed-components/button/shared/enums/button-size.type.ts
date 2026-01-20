import type { Extends } from "@react-library/common";

/**
 * Button size types
 */
export const ButtonSize = {
	ExtraSmall: "extra-small",
	Small: "small",
	Medium: "medium",
	Large: "large",
	ExtraLarge: "extra-large"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ButtonSize}
 */
export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

/**
 * Type for {@link ButtonSize} scoped to values relevant to a floating button
 */
export type ButtonSizeFloating = Extends<ButtonSize, ("small" | "medium" | "large")>;
