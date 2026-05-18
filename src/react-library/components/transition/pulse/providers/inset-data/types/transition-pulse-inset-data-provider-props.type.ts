import type { PropsWithChildren } from "react";

import type { IInsetData } from "@react-library/common";

import type { TransitionPulseInsetDataContext } from "../../../types/transition-pulse-inset-data-context.type";

/**
 * Props for transition pulse inset data provider
 */
export type TransitionPulseInsetDataProviderProps = (
	IInsetData<TransitionPulseInsetDataContext> &
	PropsWithChildren
);
