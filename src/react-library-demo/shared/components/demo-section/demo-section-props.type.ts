import type { IContentHeight, ITitle, Size } from "@react-library/common";

import type { PropsWithChildren } from "react";

export type DemoSectionProps = (
	Partial<IContentHeight<Size>> &
	PropsWithChildren &
	ITitle<string>
);
