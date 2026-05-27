import { useVirtualScrollConfigContext } from "../../hooks/virtual-scroll-config-context.hook";
import { useVirtualScrollContentSizeContext } from "../../hooks/virtual-scroll-content-size-context.hook";

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
	const config = useVirtualScrollConfigContext();

	return (
		<div style={virtualScrollContentStyle(config.orientation, config.contentWidth, size)}>
			<div style={virtualScrollContentChildStyle(config.orientation, size)}>
				{props.children}
			</div>
		</div>
	);
}
