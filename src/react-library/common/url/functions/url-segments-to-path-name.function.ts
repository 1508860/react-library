/**
 * Reduce individual path segments to the path name of a {@link URL}
 * Includes leading slash
 * @param segments
 */
export function segmentsToUrlPathName(segments: Array<string>): string {
	if (segments.length === 0) return "/";
	return segments.reduce((a, b) => `${a}/${encodeURIComponent(b)}`, "");
}
