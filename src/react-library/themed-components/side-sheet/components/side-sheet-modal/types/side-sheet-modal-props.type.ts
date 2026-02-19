import type { PropsWithChildren } from "react";

import type { IShow, IWidth, Size } from "@react-library/common";

import type { SideSheetOnBack } from "../../../types/side-sheet-on-back.type";
import type { SideSheetOnClose } from "../../../types/side-sheet-on-close.type";
import type { SideSheetPanelChild } from "../../../types/side-sheet-panel-child.type";
import type { SideSheetTitle } from "../../../types/side-sheet-title.type";

/**
 * Props for the side sheet modal component
 */
export type SideSheetModalProps = (
	PropsWithChildren &
	IShow &
	Partial<SideSheetOnBack> &
	SideSheetOnClose &
	SideSheetPanelChild &
	Partial<SideSheetTitle> &
	IWidth<Size>
);
