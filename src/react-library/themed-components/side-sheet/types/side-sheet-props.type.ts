import type { PropsWithChildren } from "react";

import type { IShow, IStyle } from "@react-library/common";

import type { SideSheetStyle } from "../enums/side-sheet-style.type";
import type { SideSheetBody } from "./side-sheet-body.type";
import type { SideSheetDetach } from "./side-sheet-detach.type";
import type { SideSheetFooter } from "./side-sheet-footer.type";
import type { SideSheetIncludeDivider } from "./side-sheet-include-divider.type";
import type { SideSheetOnBack } from "./side-sheet-on-back.type";
import type { SideSheetOnClose } from "./side-sheet-on-close.type";
import type { SideSheetShowFooterDivider } from "./side-sheet-show-footer-divider.type";
import type { SideSheetTitle } from "./side-sheet-title.type";
import type { SideSheetWidth } from "./side-sheet-width.type";

/**
 * Base props for the side sheet component
 */
export type SideSheetBaseProps<TStyle extends SideSheetStyle> = (
	PropsWithChildren &
	IShow &
	IStyle<TStyle> &
	SideSheetBody &
	Partial<SideSheetFooter> &
	Partial<SideSheetOnBack> &
	SideSheetOnClose &
	Partial<SideSheetShowFooterDivider> &
	Partial<SideSheetTitle> &
	SideSheetWidth
);

/**
 * Props for the side sheet modal component
 */
export type SideSheetModalProps = (
	SideSheetBaseProps<typeof SideSheetStyle.Modal> &
	Partial<SideSheetDetach>
);

/**
 * Props for the side sheet standard component
 */
export type SideSheetStandardProps = (
	SideSheetBaseProps<typeof SideSheetStyle.Standard> &
	Partial<SideSheetIncludeDivider>
);

/**
 * Props for the side sheet component
 */
export type SideSheetProps = (
	SideSheetModalProps |
	SideSheetStandardProps
);
