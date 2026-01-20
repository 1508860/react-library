/**
 * Replace current URL with {@link url}
 */
export function urlReplaceState(url: URL): void {
	window.history.replaceState(null, "", url);
}
