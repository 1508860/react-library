import { useContext } from "react";

import { NullContextError, type Colour } from "@react-library/common";

import { HOVER_LAYER_COLOUR_CONTEXT } from "../constants/hover-layer-colour-context.const";

/**
 * Returns context for {@link HOVER_LAYER_COLOUR_CONTEXT} and ensures a non-null value
 */
export function useHoverLayerColourContext(): Colour {
	const result = useContext(HOVER_LAYER_COLOUR_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
