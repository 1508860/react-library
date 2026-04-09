import type { CSSProperties } from "react";

import { MODAL_BASIC_SIZE_CONTENT_PADDING } from "../../../constants/modal-basic-size.const";

/**
 * Resolve modal basic content container style based on parameters
 * @param isFullWidth
 */
export function modalBasicContentContainerStyle(isFullWidth: boolean | undefined): CSSProperties {
	return {
		alignItems: "center",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		flexShrink: 0,
		paddingLeft: isFullWidth ? undefined : MODAL_BASIC_SIZE_CONTENT_PADDING,
		paddingRight: isFullWidth ? undefined : MODAL_BASIC_SIZE_CONTENT_PADDING,
		position: "relative",
		width: "100%"
	};
}
