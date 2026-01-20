/**
 * Represents fill rule style values
 */
export const StyleFillRule = {
	Evenodd: "evenodd",
	Nonzero: "nonzero"
} as const satisfies Record<string, string>;

/**
 * Type for {@link StyleFillRule}
 */
export type StyleFillRule = (typeof StyleFillRule)[keyof typeof StyleFillRule];
