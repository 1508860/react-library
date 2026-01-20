import type { IHeight, ITitle, PrefixKeys, Size } from "@react-library/common";

import type { PropsWithChildren } from "react";

export type DemoSectionProps = (
	Partial<PrefixKeys<IHeight<Size>, "content">> &
	PropsWithChildren &
	ITitle<string>
);
