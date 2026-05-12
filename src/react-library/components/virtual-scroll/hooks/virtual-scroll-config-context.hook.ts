import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_CONFIG_CONTEXT } from "../constants/virtual-scroll-config-context.const";
import type { VirtualScrollPropsConfig } from "../types/virtual-scroll-props-config.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_CONFIG_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollConfigContext(): VirtualScrollPropsConfig {
	const result = useContext(VIRTUAL_SCROLL_CONFIG_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
