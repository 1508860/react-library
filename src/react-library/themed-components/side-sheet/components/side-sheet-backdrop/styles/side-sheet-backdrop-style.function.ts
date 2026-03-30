import type { CSSProperties } from "react";

/**
 * Resolve side sheet backdrop style based on parameters
 * @param show
 */
export function sideSheetBackdropStyle(show: boolean): CSSProperties {
	return {
		height: show ? undefined : 0,
		inset: show ? 0 : undefined,
		position: "absolute",
		width: show ? undefined : 0
	};
}
