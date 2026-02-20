import type { IShow } from "@react-library/common";

import type { SideSheetBody } from "../../../types/side-sheet-body.type";
import type { SideSheetFooter } from "../../../types/side-sheet-footer.type";
import type { SideSheetOnBack } from "../../../types/side-sheet-on-back.type";
import type { SideSheetOnClose } from "../../../types/side-sheet-on-close.type";
import type { SideSheetShowContent } from "../../../types/side-sheet-show-content.type";
import type { SideSheetShowFooterDivider } from "../../../types/side-sheet-show-footer-divider.type";
import type { SideSheetShowHeaderDivider } from "../../../types/side-sheet-show-header-divider.type";
import type { SideSheetTitle } from "../../../types/side-sheet-title.type";
import type { SideSheetWidth } from "../../../types/side-sheet-width.type";

/**
 * Props for the side sheet panel component
 */
export type SideSheetPanelProps = (
	IShow &
	SideSheetBody &
	Partial<SideSheetFooter> &
	SideSheetShowContent &
	Partial<SideSheetOnBack> &
	SideSheetOnClose &
	SideSheetShowFooterDivider &
	SideSheetShowHeaderDivider &
	Partial<SideSheetTitle> &
	SideSheetWidth
);
