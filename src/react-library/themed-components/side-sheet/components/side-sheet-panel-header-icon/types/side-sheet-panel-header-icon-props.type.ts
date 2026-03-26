import type { IName, IOnClick } from "@react-library/common";
import type { MaterialIconName } from "@react-library/material-icons";

/**
 * Props for the side sheet panel header icon component
 */
export type SideSheetPanelHeaderIconProps = (
	IName<MaterialIconName> &
	Partial<IOnClick<HTMLDivElement>>
);
