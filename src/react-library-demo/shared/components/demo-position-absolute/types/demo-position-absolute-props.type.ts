import type { IDimensions, IInsetAll, Size } from "@react-library/common";
import type { PropsWithChildren } from "react";

export type DemoPositionAbsoluteProps = (
	Partial<IDimensions<Size, Size>> &
	Partial<IInsetAll<Size>> &
	PropsWithChildren
);
