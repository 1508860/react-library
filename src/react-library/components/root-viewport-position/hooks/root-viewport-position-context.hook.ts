import { useContext } from "react";

import { NullContextError, type IViewportPosition } from "@react-library/common";

import { ROOT_VIEWPORT_POSITION_CONTEXT } from "../constants/root-viewport-position-context.const";

/**
 * Returns context for {@link ROOT_VIEWPORT_POSITION_CONTEXT} and ensures a non-null value
 */
export function useRootViewportPositionContext(): IViewportPosition {
	const result = useContext(ROOT_VIEWPORT_POSITION_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
