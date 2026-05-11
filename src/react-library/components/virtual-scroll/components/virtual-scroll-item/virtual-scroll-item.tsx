import { useVirtualScrollItemRegisterEffect } from "../../hooks/virtual-scroll-item-register-effect.hook";
import { useVirtualScrollItemRegisterElementEffect } from "../../hooks/virtual-scroll-item-register-element-effect.hook";
import type { VirtualScrollItemChildProps } from "../../types/virtual-scroll-item-child.type";

import type { VirtualScrollItemProps } from "./types/virtual-scroll-item-props.type";

/**
 * Virtual scroll item component
 * @param props
 */
export function VirtualScrollItem<TChildProps extends VirtualScrollItemChildProps>(props: VirtualScrollItemProps<TChildProps>) {

	useVirtualScrollItemRegisterEffect(props.id, props.size, props.index);
	useVirtualScrollItemRegisterElementEffect(props.id, props.children, props.childProps);

	return undefined;
}
