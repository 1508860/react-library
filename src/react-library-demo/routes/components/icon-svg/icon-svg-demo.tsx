import { useState } from "react";

import {
	HexRgb,
	SVG_NAMESPACE,
	toSizeWithUnits,
	type ArrayMinLength1,
	type Colour,
	type Size
} from "@react-library/common";
import { IconSvg } from "@react-library/components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryComponentsIconSvgDemo() {

	const [colour] = useState<Colour>(() => new HexRgb("00", "00", "00"));

	// SVG data based on the material icon data as an example
	const [paths] = useState<ArrayMinLength1<string>>(() => [
		"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
	]);
	const [viewBox] = useState(() => "0 -960 960 960");

	const [size] = useState<Size>(() => 50);

	return (
		<DemoSection title="Icon  SVG">
			<DemoItem config={[
				{ key: "Colour", value: colour.toColourString() },
				{ key: "Paths", value: JSON.stringify(paths) },
				{ key: "View Box", value: viewBox },
				{ key: "Size", value: toSizeWithUnits(size) }
			]}>
				<IconSvg
					colour={colour}
					data={{
						namespace: SVG_NAMESPACE,
						paths: paths,
						viewBox: viewBox
					}}
					size={size}
				/>
			</DemoItem>
		</DemoSection>
	);
}
