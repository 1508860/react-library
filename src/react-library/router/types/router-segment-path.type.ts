import type { UrlCharacter } from "@react-library/common";

/**
 * Router segment to use when navigating to a path
 */
export type RouterSegmentPath = `${UrlCharacter}${string}${UrlCharacter}`;
