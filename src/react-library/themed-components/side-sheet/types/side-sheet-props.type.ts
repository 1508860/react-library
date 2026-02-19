import type { PropsWithChildren } from "react";

import type { IShow, IStyle, IWidth, Size } from "@react-library/common";

import type { SideSheetStyle } from "../enums/side-sheet-style.type";
import type { SideSheetIncludeDivider } from "./side-sheet-include-divider.type";
import type { SideSheetOnBack } from "./side-sheet-on-back.type";
import type { SideSheetOnClose } from "./side-sheet-on-close.type";
import type { SideSheetPanelChild } from "./side-sheet-panel-child.type";
import type { SideSheetTitle } from "./side-sheet-title.type";

/**
 * Base props for the side sheet component
 */
export type SideSheetBaseProps<TStyle extends SideSheetStyle> = (
	PropsWithChildren &
	IShow &
	IStyle<TStyle> &
	Partial<SideSheetOnBack> &
	SideSheetOnClose &
	SideSheetPanelChild &
	Partial<SideSheetTitle> &
	IWidth<Size>
);

/**
 * Props for the side sheet modal component
 */
export type SideSheetModalProps = (
	SideSheetBaseProps<typeof SideSheetStyle.Modal>
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
