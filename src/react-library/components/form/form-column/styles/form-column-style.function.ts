import type { CSSProperties } from "react";

import type { Size } from "@react-library/common";

import type { FormColumnProps } from "../types/form-column-props.type";

/**
 * Resolve form column style
 * @param props
 * @param defaultGap
 */
export function formColumnStyle(
	props: FormColumnProps,
	defaultGap: Size
): CSSProperties {
	return {
		alignItems: "start",
		display: "flex",
		flexBasis: props.flexBasis,
		flexDirection: "column",
		flexGrow: props.flexGrow,
		flexShrink: 0,
		gap: props.gap ?? defaultGap,
		maxWidth: props.maxWidth,
		minWidth: props.minWidth,
		width: props.width
	};
};
