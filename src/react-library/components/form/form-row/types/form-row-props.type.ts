import type { PropsWithChildren } from "react";

import type { IGap, Size } from "@react-library/common";

/**
 * Form row props
 */
export type FormRowProps = (
	Partial<IGap<Size>> &
	PropsWithChildren
);
