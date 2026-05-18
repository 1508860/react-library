import type { EqualityCallback, IIsEqual } from "@react-library/common";

/**
 * Props for virtual scroll component items
*/
export type VirtualScrollPropsItemIsEqual<TChildProps> = (
	IIsEqual<EqualityCallback<TChildProps>>
);
