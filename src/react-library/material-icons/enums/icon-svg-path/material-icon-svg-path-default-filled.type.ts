import type { ArrayMinLength1 } from "@react-library/common";

import { MaterialIconName } from "../material-icon-name.type";
import { MaterialIconSvgPathThick } from "./material-icon-svg-path-thick.type";

/**
 * Type for {@link MaterialIconSvgPathDefaultFilled}
 */
export type MaterialIconSvgPathDefaultFilled = (typeof MaterialIconSvgPathDefaultFilled)[keyof typeof MaterialIconSvgPathDefaultFilled];

/**
 * Type for material icon SVG data to draw the icon from as an outline
 * Generated from: https://fonts.google.com/icons?icon.size=30&icon.color=%231f1f1f&icon.platform=web&selected=Material+Symbols+Outlined:add:FILL@1;wght@400;GRAD@0;opsz@24&icon.set=Material+Symbols
 * (Icons that don't have a filled equivalent are mapped to a thick value instead)
 */
export const MaterialIconSvgPathDefaultFilled = {
	[MaterialIconName.Add]: MaterialIconSvgPathThick[MaterialIconName.Add],
	[MaterialIconName.ArrowBack]: MaterialIconSvgPathThick[MaterialIconName.ArrowBack],
	[MaterialIconName.CheckCircle]: ["m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"],
	[MaterialIconName.ChevronRight]: MaterialIconSvgPathThick[MaterialIconName.ChevronRight],
	[MaterialIconName.Close]: MaterialIconSvgPathThick[MaterialIconName.Close],
	[MaterialIconName.Delete]: ["M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"],
	[MaterialIconName.ExpandCircleDown]: ["m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"],
	[MaterialIconName.ExpandCircleUp]: ["m480-507 123 123 57-56-180-180-180 180 57 56 123-123Zm0 427q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"],
	[MaterialIconName.Favorite]: ["m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"],
	[MaterialIconName.Home]: ["M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"],
	[MaterialIconName.KeyboardArrowDown]: MaterialIconSvgPathThick[MaterialIconName.KeyboardArrowDown],
	[MaterialIconName.KeyboardArrowUp]: MaterialIconSvgPathThick[MaterialIconName.KeyboardArrowUp],
	[MaterialIconName.Menu]: MaterialIconSvgPathThick[MaterialIconName.Menu],
	[MaterialIconName.MenuOpen]: MaterialIconSvgPathThick[MaterialIconName.MenuOpen],
	[MaterialIconName.Search]: MaterialIconSvgPathThick[MaterialIconName.Search],
	[MaterialIconName.Settings]: ["m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"],
	[MaterialIconName.Star]: ["m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"]
} as const satisfies Record<MaterialIconName, ArrayMinLength1<string>>;
