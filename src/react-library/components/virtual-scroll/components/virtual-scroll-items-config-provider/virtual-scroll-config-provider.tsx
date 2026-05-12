import { useCallback } from "react";

import { useResolveState, type Callback, type EqualityCallback } from "@react-library/common";

import { VIRTUAL_SCROLL_CONFIG_CONTEXT } from "../../constants/virtual-scroll-config-context.const";
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
	const isConfigEqual = useCallback<EqualityCallback<VirtualScrollPropsConfig>>(
		(value1, value2) => (
			value1.itemBufferCount === value2.itemBufferCount &&
			value1.itemSize === value2.itemSize &&
			value1.orientation === value2.orientation
		),
		[]
	);
	const config = useResolveState(resolveConfig, isConfigEqual);

	return (
		<VIRTUAL_SCROLL_CONFIG_CONTEXT value={config}>
			{props.children}
		</VIRTUAL_SCROLL_CONFIG_CONTEXT>
	);
}
