import type { PropsWithChildren } from "react";

import type { ArrayMinLength1, IConfig, IKeyValue, ILabel } from "@react-library/common";

export type DemoItemProps = (
	Partial<IConfig<ArrayMinLength1<IKeyValue<string, string>>>> &
	Partial<ILabel<string>> &
	PropsWithChildren
);
