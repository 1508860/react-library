import type { PropsWithChildren } from "react";

import type {
	IConfig,
	IHeight,
	ILabel,
	IWidth,
	SizePx
} from "@react-library/common";

import type { DemoItemConfigCollection } from "./demo-item-config.type";

export type DemoItemProps = (
	Partial<IConfig<DemoItemConfigCollection>> &
	Partial<IHeight<SizePx>> &
	Partial<ILabel<string>> &
	PropsWithChildren &
	Partial<IWidth<SizePx>>
);
