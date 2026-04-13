import type { CSSProperties } from "react";

import { MODAL_FULL_SIZE_CONTENT_PADDING } from "../../../constants/modal-full-size.const";

/**
 * Resolve modal full children container style based on parameters
 * @param isFullWidth
 */
export function modalFullChildrenContainerStyle(isFullWidth: boolean | undefined): CSSProperties {
	return {
		boxSizing: "border-box",
		display: "block",
		height: "100%",
		paddingLeft: isFullWidth ? undefined : MODAL_FULL_SIZE_CONTENT_PADDING,
		paddingRight: isFullWidth ? undefined : MODAL_FULL_SIZE_CONTENT_PADDING,
		position: "relative",
		width: "100%"
	};
}
