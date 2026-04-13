/**
 * Basic scroll container direction
 */
export const ScrollBasicDirection = {
	Both: "both",
	Single: "single"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ScrollBasicDirection}
 */
export type ScrollBasicDirection = (typeof ScrollBasicDirection)[keyof typeof ScrollBasicDirection];
