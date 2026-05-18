import type { PropsWithChildren } from "react";

import type { Colour, IColour } from "@react-library/common";

/**
 * Props for hover layer colour provider
 */
export type HoverLayerColourProviderProps = (
	IColour<Colour> &
	PropsWithChildren
);
