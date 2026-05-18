import type { VirtualScrollPropsItemIsEqual } from "../../../types/virtual-scroll-props-item-is-equal.type";

/**
 * Props for virtual scroll item resolver component
 */
export type VirtualScrollItemResolverProps<TChildProps> = (
	VirtualScrollPropsItemIsEqual<TChildProps>
);
