import type { PropsWithChildren } from "react";

import type { IShow } from "@react-library/common";

import type { SideSheetBody } from "../../../types/side-sheet-body.type";
import type { SideSheetFooter } from "../../../types/side-sheet-footer.type";
import type { SideSheetIncludeDivider } from "../../../types/side-sheet-include-divider.type";
import type { SideSheetIncludeBodyPaddingBottom } from "../../../types/side-sheet-include-body-padding-bottom.type";
import type { SideSheetIncludeBodyPaddingHorizontal } from "../../../types/side-sheet-include-body-padding-horizontal.type";
import type { SideSheetOnBack } from "../../../types/side-sheet-on-back.type";
import type { SideSheetOnClose } from "../../../types/side-sheet-on-close.type";
import type { SideSheetShowFooterDivider } from "../../../types/side-sheet-show-footer-divider.type";
import type { SideSheetTitle } from "../../../types/side-sheet-title.type";
import type { SideSheetWidth } from "../../../types/side-sheet-width.type";

/**
 * Props for the side sheet standard component
 */
export type SideSheetStandardProps = (
	PropsWithChildren &
	IShow &
	SideSheetBody &
	Partial<SideSheetFooter> &
	SideSheetIncludeBodyPaddingBottom &
	SideSheetIncludeBodyPaddingHorizontal &
	SideSheetIncludeDivider &
	Partial<SideSheetOnBack> &
	SideSheetOnClose &
	SideSheetShowFooterDivider &
	Partial<SideSheetTitle> &
	SideSheetWidth
);
