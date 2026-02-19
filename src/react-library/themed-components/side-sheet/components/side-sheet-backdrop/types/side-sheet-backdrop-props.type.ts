import type { IShow } from "@react-library/common";

import type { SideSheetOnClose } from "../../../types/side-sheet-on-close.type";

/**
 * Props for a side sheet backdrop
 */
export type SideSheetBackdropProps = (
	IShow &
	SideSheetOnClose
);
