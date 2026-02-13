import { useContext } from "react";

import { NullContextError } from "../../errors";

import { LANGUAGE_CODE_CONTEXT } from "./language-code-context.const";
import type { LanguageCode } from "./language-code.type";

/**
 * Returns context for {@link LANGUAGE_CODE_CONTEXT} and ensures a non-null value
 */
export function useLanguageCodeContext(): LanguageCode {
	const result = useContext(LANGUAGE_CODE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
