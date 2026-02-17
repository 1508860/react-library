import { useContext } from "react";

import { NullContextError, type ViewportPositionPx } from "@react-library/common";

import { ROOT_VIEWPORT_POSITION_PX_CONTEXT } from "../constants/root-viewport-position-px-context.const";

/**
 * Returns context for {@link ROOT_VIEWPORT_POSITION_PX_CONTEXT} and ensures a non-null value
 */
export function useRootViewportPositionPxContext(): ViewportPositionPx {
	const result = useContext(ROOT_VIEWPORT_POSITION_PX_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
