import { Badge } from "../default";

import { BADGE_ANCHORED_CONTAINER_STYLE } from "./styles/badge-anchored-container-style.const";
import { BADGE_ANCHORED_INDICATOR_STYLE } from "./styles/badge-anchored-indicator-style.const";
import type { BadgeAnchoredProps } from "./types/badge-anchored-props.type";

/**
 * Component to handle a badge anchored component
 * @param props
 */
export function BadgeAnchored(props: BadgeAnchoredProps) {

	if (!props.show) return (
		props.children
	);

	return (
		<div style={BADGE_ANCHORED_CONTAINER_STYLE}>
			{props.children}
			<div style={BADGE_ANCHORED_INDICATOR_STYLE}>
				<Badge label={props.label} />
			</div>
		</div>
	);
}
