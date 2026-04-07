import type { CSSProperties } from "react";

/**
 * Resolve side sheet panel header icon style based on parameters
 * @param isHovered
 */
export function sideSheetPanelHeaderIconStyle(isHovered: boolean): CSSProperties {
	return {
		cursor: isHovered ? "pointer" : undefined
	};
}
