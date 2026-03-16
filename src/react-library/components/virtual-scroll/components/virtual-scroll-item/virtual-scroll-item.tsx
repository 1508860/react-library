import { useVirtualScrollOrientationContext } from "../../hooks/virtual-scroll-orientation-context.hook";

import { useVirtualScrollItemChildState } from "./hooks/virtual-scroll-item-child-state.hook";
import { useVirtualScrollItemRegisterState } from "./hooks/virtual-scroll-item-register-state.hook";
import { virtualScrollItemStyle } from "./styles/virtual-scroll-item-style.function";
import type { VirtualScrollItemProps } from "./types/virtual-scroll-item-props.type";

/**
 * Virtual scroll item component
 * @param props
 */
export function VirtualScrollItem(props: VirtualScrollItemProps) {

	const virtualScrollOrientation = useVirtualScrollOrientationContext();
	const [virtualScrollItemRegister] = useVirtualScrollItemRegisterState(props.id, props.size, props.sortOrder);
	const [VirtualScrollItemChild] = useVirtualScrollItemChildState(props.id, props.children);

	if (!VirtualScrollItemChild) return undefined;

	return (
		<div
			key={`child-container-${props.id}`}
			style={virtualScrollItemStyle(virtualScrollOrientation, virtualScrollItemRegister.size)}
		>
			<VirtualScrollItemChild key={props.id} />
		</div>
	);
}
