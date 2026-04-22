import type { CSSProperties } from "react";

/**
 * Resolve text field supporting text side style based on parameters
 * @param isLeft
 */
export function textFieldSupportingTextSideStyle(isLeft: boolean): CSSProperties {
	return {
		alignItems: isLeft ? "start" : "end",
		display: "flex",
		flexDirection: "column",
		flexGrow: isLeft ? 1 : undefined,
		flexShrink: 0
	};
}
