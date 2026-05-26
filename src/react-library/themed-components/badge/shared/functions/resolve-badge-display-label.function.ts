import { BADGE_LABEL_MAX, BADGE_LABEL_MAX_DISPLAY } from "../constants/badge-label-max.const";
import type { BadgeDisplayLabel } from "../types/badge-display-label.type";
import type { BadgeLabel } from "../types/badge-label.type";

/**
 * Resolve badge label
 * @param label
 */
export function resolveBadgeDisplayLabel(label: BadgeLabel): BadgeDisplayLabel {
	if(label === undefined) return label;
	if (label <= 0) return `${0}`;
	else if (label > BADGE_LABEL_MAX) return BADGE_LABEL_MAX_DISPLAY
	else return `${label}`;
}
