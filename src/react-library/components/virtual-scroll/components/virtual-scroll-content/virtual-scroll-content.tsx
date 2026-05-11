import { useVirtualScrollContentSizeContext } from "../../hooks/virtual-scroll-content-size-context.hook";
import { useVirtualScrollOrientationContext } from "../../hooks/virtual-scroll-orientation-context.hook";

import { VirtualScrollItemResolver } from "../virtual-scroll-item-resolver";

import { virtualScrollContentChildStyle } from "./styles/virtual-scroll-content-child-style.function";
import { virtualScrollContentStyle } from "./styles/virtual-scroll-content-style.function";
import type { VirtualScrollContentProps } from "./types/virtual-scroll-content-props.type";

/**
 * Virtual scroll component
 * Wraps virtual scroll items but sits within scroll container
 * @param props
 */
export function VirtualScrollContent(props: VirtualScrollContentProps) {

	const size = useVirtualScrollContentSizeContext();
	const orientation = useVirtualScrollOrientationContext();

	return (
		<div style={virtualScrollContentStyle(orientation, size)}>
			<div style={virtualScrollContentChildStyle(orientation, size)}>
				<VirtualScrollItemResolver />
				{props.children}
			</div>
		</div>
	);
}
