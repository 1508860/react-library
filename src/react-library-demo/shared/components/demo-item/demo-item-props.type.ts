import type { PropsWithChildren } from "react";

import type {
	ArrayMinLength1,
	IConfig,
	IHeight,
	IKeyValue,
	ILabel,
	IWidth,
	SizePx
} from "@react-library/common";

export type DemoItemProps = (
	Partial<IConfig<ArrayMinLength1<IKeyValue<string, string>>>> &
	Partial<IHeight<SizePx>> &
	Partial<ILabel<string>> &
	PropsWithChildren &
	Partial<IWidth<SizePx>>
);
