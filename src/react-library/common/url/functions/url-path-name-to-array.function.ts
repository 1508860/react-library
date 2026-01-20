/**
 * Parse the path name of a {@link URL} to an array of individual path segments
 * @param url
 */
export function urlPathNameToArray(url: URL): Array<string> {
	const pathName: string  = url.pathname;
	// Remove leading slash and split path in to valid segments
	const result: Array<string> = pathName.substring(1).split("/").map(x => decodeURIComponent(x)).filter(x => x.length > 0);
	return result;
}
