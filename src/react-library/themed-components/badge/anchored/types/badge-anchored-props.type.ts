import type { PropsWithChildren } from "react";

import type { BadgePropsLabel } from "../../shared/types/badge-props-label.type";
import type { BadgePropsShow } from "../../shared/types/badge-props-show.type";

/**
 * Props for a badge anchored component
 */
export type BadgeAnchoredProps = (
	BadgePropsLabel &
	BadgePropsShow &
	PropsWithChildren
);
