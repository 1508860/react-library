import type { PropsWithChildren } from "react";

import type {
	IConfig,
	IHeight,
	ILabel,
	IWidth,
	Size
} from "@react-library/common";

import type { DemoItemConfigCollection } from "./demo-item-config.type";

export type DemoItemProps = (
	Partial<IConfig<DemoItemConfigCollection>> &
	Partial<IHeight<Size>> &
	Partial<ILabel<string>> &
	PropsWithChildren &
	Partial<IWidth<Size>>
);
