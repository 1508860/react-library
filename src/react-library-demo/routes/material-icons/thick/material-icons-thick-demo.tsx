import { useState } from "react";

import { HexRgb, type Colour } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryMaterialIconsThickDemo() {

	const [iconNames] = useState<Array<MaterialIconName>>(() => Object.values(MaterialIconName));
	const [colour] = useState<Colour>(() => new HexRgb("00", "00", "00"));

	return (
		<DemoSection title="Material Icons - Style - Thick">
			{iconNames.map(iconName => (
				<DemoItem label={iconName}>
					<MaterialIconSvg
						colour={colour}
						key={`icon-svg-${iconName}`}
						name={iconName}
						size={100}
						style={MaterialIconStyle.Thick}
					/>
				</DemoItem>
			))}
		</DemoSection>
	);
}
