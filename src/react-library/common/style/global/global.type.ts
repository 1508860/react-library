/**
 * Represents global style values
 */
export const StyleGlobal = {
	Inherit: "inherit",
	Initial: "initial",
	RevertLayer: "revert-layer",
	Revert: "revert",
	Unset: "unset"
} as const satisfies Record<string, string>;

/**
 * Type for {@link StyleGlobal}
 */
export type StyleGlobal = (typeof StyleGlobal)[keyof typeof StyleGlobal];
