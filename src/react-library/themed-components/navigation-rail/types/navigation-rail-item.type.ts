import type { ReactElement } from "react";

import type {
	IElement,
	IIconName,
	IId,
	ILabel,
	IShow,
	PrefixKeys,
	SuffixKeys
} from "@react-library/common";
import type { MaterialIconName } from "@react-library/material-icons";

import type { BadgeLabel } from "../../badge";

import type { NavigationRailItemId } from "./navigation-rail-item-id.type";

/**
 * Type for a navigation rail item
 */
export type NavigationRailItem<TItemId extends NavigationRailItemId> = (
	IElement<() => ReactElement> &
	IIconName<MaterialIconName> &
	PrefixKeys<IId<TItemId>, "item"> &
	ILabel<string> &
	Partial<PrefixKeys<ILabel<BadgeLabel>, "badge">> &
	SuffixKeys<IShow, "Badge">
);
