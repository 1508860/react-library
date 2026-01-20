/**
 * Describes a SVG to define how an icon should be drawn
 */
export interface ISvgData {
	namespace: string;
	paths: [string, ...Array<string>];
	viewBox: string;
}
