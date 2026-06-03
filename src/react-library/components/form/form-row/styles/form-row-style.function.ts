import type { CSSProperties } from "react";

import type { Size } from "@react-library/common";

import type { FormRowProps } from "../types/form-row-props.type";

/**
 * Resolve form row style
 * @param props
 * @param defaultGap
 */
export function formRowStyle(
	props: FormRowProps,
	defaultGap: Size
): CSSProperties {
	return {
		alignItems: "start",
		display: "flex",
		flexDirection: "row",
		flexShrink: 0,
		gap: props.gap ?? defaultGap,
		width: "100%"
	};
};
