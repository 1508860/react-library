import type { CSSProperties } from "react";

import { Orientation, type SizePx } from "@react-library/common";

import { ButtonSize } from "../../button";

import { ButtonGroupAction } from "../enums/button-group-action.type";
import { ButtonGroupAlignItems } from "../enums/button-group-align-items.type";
import type { ButtonGroupProps } from "../types/button-group-props.type";

/**
 * Resolve button group container style based on parameters
 * @param props
 */
export function buttonGroupContainerStyle(props: ButtonGroupProps): CSSProperties {

	let gap: SizePx | undefined = undefined

	if (props.action === ButtonGroupAction.Selection) {
		gap = 2;
	} else {
		switch (props.size) {
			case ButtonSize.ExtraSmall:
				gap = 18;
				break;
			case ButtonSize.Small:
				gap = 12;
				break;
			default:
				gap = 8;
		}
	}

	return {
		alignItems: (props.orientation === Orientation.Vertical) ? ((props.align === ButtonGroupAlignItems.Start) ? "start" : "end") : undefined,
		display: "flex",
		flexDirection: (props.orientation === Orientation.Vertical) ? "column" : "row",
		gap: gap
	};
}
