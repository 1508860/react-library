import type { PropsWithChildren } from "react";

import type { IColour } from "@react-library/common";

import type { ScrollColour } from "../../shared/types/scroll-colour.type";

/**
 * Props for the scroll virtual component
 */
export type ScrollVirtualProps = (
	IColour<ScrollColour> &
	PropsWithChildren
);
