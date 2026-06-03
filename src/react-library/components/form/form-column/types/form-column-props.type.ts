import type { PropsWithChildren } from "react";

import type {
	IFlexBasis,
	IFlexGrow,
	IGap,
	IMaxWidth,
	IMinWidth,
	IWidth,
	Size
} from "@react-library/common";

/**
 * Form column props
 */
export type FormColumnProps = (
	Partial<IFlexBasis<number>> &
	Partial<IFlexGrow<number>> &
	Partial<IGap<Size>> &
	Partial<IMaxWidth<Size>> &
	Partial<IMinWidth<Size>> &
	PropsWithChildren &
	Partial<IWidth<Size>>
);
