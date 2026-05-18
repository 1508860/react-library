import { useContext } from "react";

import { HOVER_LAYER_IS_DISABLED_CONTEXT } from "../constants/hover-layer-is-disabled-context.const";

/**
 * Returns context for {@link HOVER_LAYER_IS_DISABLED_CONTEXT}
 * Note: Allows for context to not be provided, which results in the hover layer always being enabled
 */
export function useHoverLayerIsDisabledContext(): boolean {
	const result = useContext(HOVER_LAYER_IS_DISABLED_CONTEXT);
	return !!result;
};
