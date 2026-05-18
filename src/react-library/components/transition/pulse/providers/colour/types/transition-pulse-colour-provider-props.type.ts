import type { PropsWithChildren } from "react";

import type { Colour, IColour } from "@react-library/common";

/**
 * Props for transition pulse colour provider
 */
export type TransitionPulseColourProviderProps = (
	IColour<Colour> &
	PropsWithChildren
);
