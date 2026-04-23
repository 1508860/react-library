import type { CSSProperties } from "react";

/**
 * Scroll textarea component style
 */
export type ScrollTextareaStyle = (
	Omit<
		CSSProperties,
		keyof Pick<
			CSSProperties,
			(
				"backgroundColor"
			)
		>
	>
);
