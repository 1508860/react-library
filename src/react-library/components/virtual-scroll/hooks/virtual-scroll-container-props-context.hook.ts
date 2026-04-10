import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT } from "../constants/virtual-scroll-container-props-context.const";
import type { VirtualScrollContainerProps } from "../types/virtual-scroll-container-props.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollContainerPropsContext(): VirtualScrollContainerProps {
	const result = useContext(VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
