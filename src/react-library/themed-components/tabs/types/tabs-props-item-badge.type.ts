import type { IBadgeLabel, IShowBadge } from "@react-library/common";

import type { BadgeLabel } from "../../badge";

/**
 * Describes the tabs component's props for an item badge
 */
export type TabsPropsItemBadge = (
	Partial<IBadgeLabel<BadgeLabel>> &
	IShowBadge
);
