import type { PropsWithChildren } from "react";

import type { IShow, ILabel } from "@react-library/common";

import type { BadgeLabel } from "./badge-label.type";

/**
 * Props for a badge
 */
export type BadgeProps = (
	Partial<ILabel<BadgeLabel>> &
	PropsWithChildren &
	IShow
);
