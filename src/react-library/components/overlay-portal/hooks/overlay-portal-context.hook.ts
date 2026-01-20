import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { OVERLAY_PORTAL_CONTEXT } from "../constants/overlay-portal-context.const";
import type { OverlayPortalContext } from "../types/overlay-portal-context.type";

/**
 * Returns context for {@link OVERLAY_PORTAL_CONTEXT} and ensures a non-null value
 */
export function useOverlayPortalContext(): OverlayPortalContext {
	const result = useContext(OVERLAY_PORTAL_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
