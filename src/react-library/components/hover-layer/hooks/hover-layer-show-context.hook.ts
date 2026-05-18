import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { HOVER_LAYER_SHOW_CONTEXT } from "../constants/hover-layer-show-context.const";

/**
 * Returns context for {@link HOVER_LAYER_SHOW_CONTEXT} and ensures a non-null value
 */
export function useHoverLayerShowContext(): boolean {
	const result = useContext(HOVER_LAYER_SHOW_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
