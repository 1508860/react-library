import type { PropsWithChildren } from "react";

import type { IKeyValue } from "@react-library/common";

export interface IDemoItemProps extends PropsWithChildren {
	configItems?: [IKeyValue<string, string>, ...Array<IKeyValue<string, string>>];
	label?: string;
}
