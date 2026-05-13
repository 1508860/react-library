import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { VIRTUAL_SCROLL_CONFIG_CONTEXT } from "../../constants/virtual-scroll-config-context.const";
import { isVirtualScrollPropsConfigEqual } from "../../functions/is-virtual-scroll-props-config-equal.function";
import type { VirtualScrollPropsConfig } from "../../types/virtual-scroll-props-config.type";

import type { VirtualScrollConfigProviderProps } from "./types/virtual-scroll-config-provider-props.type";

/**
 * Virtual scroll config provider component
 * Used to provide contexts for config props for the virtual scroll
 * @param props
 */
export function VirtualScrollConfigProvider(props: VirtualScrollConfigProviderProps) {

	const resolveConfig = useCallback<Callback<VirtualScrollPropsConfig>>(
		() => ({
			itemBufferCount: props.itemBufferCount,
			itemSize: props.itemSize,
			orientation: props.orientation
		}),
		[props.itemBufferCount, props.itemSize, props.orientation]
	);
	const config = useResolveState(resolveConfig, isVirtualScrollPropsConfigEqual);

	return (
		<VIRTUAL_SCROLL_CONFIG_CONTEXT value={config}>
			{props.children}
		</VIRTUAL_SCROLL_CONFIG_CONTEXT>
	);
}
