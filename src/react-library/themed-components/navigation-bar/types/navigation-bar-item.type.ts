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

import type { NavigationBarItemId } from "./navigation-bar-item-id.type";

/**
 * Type for a navigation bar item
 */
export type NavigationBarItem<TItemId extends NavigationBarItemId> = (
	IElement<() => ReactElement> &
	IIconName<MaterialIconName> &
	IId<TItemId> &
	ILabel<string> &
	Partial<PrefixKeys<ILabel<BadgeLabel>, "badge">> &
	SuffixKeys<IShow, "Badge">
);
