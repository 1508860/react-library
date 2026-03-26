import type { Property } from "csstype";
import type { CSSProperties } from "react";

import { TransitionTimingMap } from "../../shared/enums/transition-timing-map.type";
import { TransitionSizeCollapseDirection } from "../enums/transition-size-collapse-direction.type";
import type { TransitionSizeCollapseProps } from "../types/transition-size-collapse-props.type";

/**
 * Resolve transition size collapse style based on parameters
 * @param props
 */
export function transitionSizeCollapseStyle(props: TransitionSizeCollapseProps): CSSProperties {

	let gridTemplateColumns: Property.GridTemplateColumns | undefined = undefined;
	let gridTemplateRows: Property.GridTemplateRows | undefined = undefined;
	let transitionProperty: Property.TransitionProperty | undefined = undefined;

	switch (props.direction) {
		case TransitionSizeCollapseDirection.All:
			gridTemplateColumns = props.isCollapsed ? "0fr" : "1fr";
			gridTemplateRows = props.isCollapsed ? "0fr" : "1fr";
			transitionProperty = "grid-template-columns, grid-template-rows";
			break;
		case TransitionSizeCollapseDirection.Horizontal:
			gridTemplateColumns = props.isCollapsed ? "0fr" : "1fr";
			gridTemplateRows = "1fr";
			transitionProperty = "grid-template-columns";
			break;
		case TransitionSizeCollapseDirection.Vertical:
			gridTemplateColumns = "1fr";
			gridTemplateRows = props.isCollapsed ? "0fr" : "1fr";
			transitionProperty = "grid-template-rows";
			break;
	}

	return {
		display: "inline-grid",
		gridTemplateColumns: gridTemplateColumns,
		gridTemplateRows: gridTemplateRows,
		transitionDuration: `${props.durationMs}ms`,
		transitionProperty: transitionProperty,
		transitionTimingFunction: TransitionTimingMap[props.timing]
	};
}
