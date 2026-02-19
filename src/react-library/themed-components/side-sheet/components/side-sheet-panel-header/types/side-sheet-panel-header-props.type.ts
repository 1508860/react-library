import type { IShow } from "@react-library/common";

import type { SideSheetOnBack } from "../../../types/side-sheet-on-back.type";
import type { SideSheetOnClose } from "../../../types/side-sheet-on-close.type";
import type { SideSheetTitle } from "../../../types/side-sheet-title.type";

/**
 * Props for the side sheet panel header component
 */
export type SideSheetPanelHeaderProps = (
	IShow &
	Partial<SideSheetOnBack> &
	SideSheetOnClose &
	Partial<SideSheetTitle>
);
