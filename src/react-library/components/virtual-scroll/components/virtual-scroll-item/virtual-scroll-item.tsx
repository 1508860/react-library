import { useVirtualScrollOrientationContext } from "../../hooks/virtual-scroll-orientation-context.hook";
import type { VirtualScrollItemChildProps } from "../../types/virtual-scroll-item-child.type";

import { useVirtualScrollItemIsInViewState } from "./hooks/virtual-scroll-item-is-in-view-state.hook";
import { useVirtualScrollItemRegisterState } from "./hooks/virtual-scroll-item-register-state.hook";
import { virtualScrollItemStyle } from "./styles/virtual-scroll-item-style.function";
import type { VirtualScrollItemProps } from "./types/virtual-scroll-item-props.type";

/**
 * Virtual scroll item component
 * @param props
 */
export function VirtualScrollItem<TChildProps extends VirtualScrollItemChildProps>(props: VirtualScrollItemProps<TChildProps>) {

	const virtualScrollOrientation = useVirtualScrollOrientationContext();
	const virtualScrollItemRegister = useVirtualScrollItemRegisterState(props.id, props.size, props.index);
	const virtualScrollItemIsInView = useVirtualScrollItemIsInViewState(props.id);

	if (!virtualScrollItemIsInView) return undefined;

	return (
		<div
			key={`child-container-${props.id}`}
			style={virtualScrollItemStyle(virtualScrollOrientation, virtualScrollItemRegister.size)}
		>
			<props.children {...props.childProps} />
		</div>
	);
}
