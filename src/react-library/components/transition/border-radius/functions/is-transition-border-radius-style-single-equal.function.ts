import type { TransitionBorderRadiusStyleSingle } from "../types/transition-border-radius-style-single.type";

/**
 * Compare two objects of type {@link TransitionBorderRadiusStyleSingle} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isTransitionBorderRadiusStyleSingleEqual(
	value1: TransitionBorderRadiusStyleSingle,
	value2: TransitionBorderRadiusStyleSingle
): boolean {
	return (
		(
			(
				!value1.bottom &&
				!value2.bottom
			) ||
			(
				!!value1.bottom &&
				!!value2.bottom &&
				value1.bottom.colour?.toColourString() === value2.bottom.colour?.toColourString() &&
				value1.bottom.leftRadius === value2.bottom.leftRadius &&
				value1.bottom.rightRadius === value2.bottom.rightRadius &&
				value1.bottom.style === value2.bottom.style &&
				value1.bottom.width === value2.bottom.width
			)
		) &&
		value1.boxShadow === value2.boxShadow &&
		(
			(
				!value1.left &&
				!value2.left
			) ||
			(
				!!value1.left &&
				!!value2.left &&
				value1.left.colour?.toColourString() === value2.left.colour?.toColourString() &&
				value1.left.style === value2.left.style &&
				value1.left.width === value2.left.width
			)
		) &&
		(
			(
				!value1.right &&
				!value2.right
			) ||
			(
				!!value1.right &&
				!!value2.right &&
				value1.right.colour?.toColourString() === value2.right.colour?.toColourString() &&
				value1.right.style === value2.right.style &&
				value1.right.width === value2.right.width
			)
		) &&
		(
			(
				!value1.top &&
				!value2.top
			) ||
			(
				!!value1.top &&
				!!value2.top &&
				value1.top.colour?.toColourString() === value2.top.colour?.toColourString() &&
				value1.top.leftRadius === value2.top.leftRadius &&
				value1.top.rightRadius === value2.top.rightRadius &&
				value1.top.style === value2.top.style &&
				value1.top.width === value2.top.width
			)
		)
	);
}
