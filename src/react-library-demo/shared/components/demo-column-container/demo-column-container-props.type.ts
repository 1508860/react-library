import type { PropsWithChildren } from "react";

import type { IWidth, Size } from "@react-library/common";

export type DemoColumnContainerProps = (
	Partial<IWidth<Size>> &
	PropsWithChildren
);
