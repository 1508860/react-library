import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { ROUTER_SUBJECT_CONTEXT } from "../constants/router-subject-context.const";
import type { RouterSubject } from "../types/router-subject.type";

/**
 * Returns context for {@link ROUTER_SUBJECT_CONTEXT} and ensures a non-null value
 */
export function useRouterSubjectContext(): RouterSubject {
	const result = useContext(ROUTER_SUBJECT_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
