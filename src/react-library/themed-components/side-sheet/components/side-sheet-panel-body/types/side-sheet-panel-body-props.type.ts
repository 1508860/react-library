import type { IShow } from "@react-library/common";

import type { SideSheetBody } from "../../../types/side-sheet-body.type";
import type { SideSheetIncludeBodyPaddingBottom } from "../../../types/side-sheet-include-body-padding-bottom.type";
import type { SideSheetIncludeBodyPaddingHorizontal } from "../../../types/side-sheet-include-body-padding-horizontal.type";
import type { SideSheetWidth } from "../../../types/side-sheet-width.type";

/**
 * Props for the side sheet panel body component
 */
export type SideSheetPanelBodyProps = (
	IShow &
	SideSheetBody &
	SideSheetIncludeBodyPaddingBottom &
	SideSheetIncludeBodyPaddingHorizontal &
	SideSheetWidth
);
