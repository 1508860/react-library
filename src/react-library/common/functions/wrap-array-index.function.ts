import { WrapArrayIndexError } from "../errors";

/**
 * Function to wrap a value between a min & max value
 * @param currentIndex the start point in the array to increment from
 * @param lastIndex how large is the array being incremented
 * @param incrementBy how many elements should be iterated. Can be positive or negative
 * @returns Post incremented index for array
 */
export function wrapArrayIndex(currentIndex: number, lastIndex: number, incrementBy: number): number {
	if (currentIndex < 0) throw new WrapArrayIndexError();
	if (lastIndex < 0) throw new WrapArrayIndexError();
	if (currentIndex > lastIndex) throw new WrapArrayIndexError();
	if (lastIndex === 0) return 0;
	if (incrementBy === 0) return currentIndex;

	if (incrementBy < 0) {
		let incrementedIndex: number = (currentIndex + incrementBy);
		if (incrementedIndex >= 0) return incrementedIndex;
		while (incrementedIndex < 0) incrementedIndex += (lastIndex + 1);
		return incrementedIndex;
	}

	let incrementedIndex: number = (currentIndex + incrementBy);
	if (incrementedIndex <= lastIndex) return incrementedIndex;
	while (incrementedIndex > lastIndex) incrementedIndex -= (lastIndex + 1);
	return incrementedIndex;
}
