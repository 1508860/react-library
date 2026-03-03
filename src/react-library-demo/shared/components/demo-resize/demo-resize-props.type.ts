import type { PropsWithChildren } from "react";

import type {
	IHeight,
	IResizeHorizontal,
	IResizeVertical,
	IWidth,
	Size
} from "@react-library/common";

export type DemoResizeProps = (
	PropsWithChildren &
	Partial<IHeight<Size>> &
	Partial<IResizeHorizontal<boolean>> &
	Partial<IResizeVertical<boolean>> &
	Partial<IWidth<Size>>
);
