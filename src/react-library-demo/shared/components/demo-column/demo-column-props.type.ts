import type { PropsWithChildren } from "react";

import type { IWeight } from "@react-library/common";

export type DemoColumnProps = (
	PropsWithChildren &
	IWeight<number>
);
