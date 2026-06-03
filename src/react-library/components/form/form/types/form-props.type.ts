import type { PropsWithChildren } from "react";

import type {
	IAction,
	IGap,
	IMethod,
	IName,
	Size
} from "@react-library/common";

import type { FormMethod } from "../../shared/enums/form-method.type";

/**
 * Form props
 */
export type FormProps = (
	Partial<IAction<string>> &
	IGap<Size> &
	Partial<IMethod<FormMethod>> &
	Partial<IName<string>> &
	PropsWithChildren
);
