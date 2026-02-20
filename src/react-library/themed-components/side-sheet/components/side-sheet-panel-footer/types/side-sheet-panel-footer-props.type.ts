import type { IShow } from "@react-library/common";

import type { SideSheetFooter } from "../../../types/side-sheet-footer.type";
import type { SideSheetWidth } from "../../../types/side-sheet-width.type";

/**
 * Props for the side sheet panel footer component
 */
export type SideSheetPanelFooterProps = (
	IShow &
	Partial<SideSheetFooter> &
	SideSheetWidth
);
