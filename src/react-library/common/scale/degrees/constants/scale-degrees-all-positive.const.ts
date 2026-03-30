import { ScaleDegrees } from "../enums/scale-degrees.type";

/**
 * All degrees scale values that are positive
 * Note: includes the lower bound of 0
 */
export const SCALE_DEGREES_ALL_POSITIVE: Array<ScaleDegrees> = [
	// None
	ScaleDegrees[0],

	// Positive
	ScaleDegrees[1], ScaleDegrees[2], ScaleDegrees[3], ScaleDegrees[4], ScaleDegrees[5], ScaleDegrees[6], ScaleDegrees[7], ScaleDegrees[8], ScaleDegrees[9],
	ScaleDegrees[10], ScaleDegrees[11], ScaleDegrees[12], ScaleDegrees[13], ScaleDegrees[14], ScaleDegrees[15], ScaleDegrees[16], ScaleDegrees[17], ScaleDegrees[18], ScaleDegrees[19],
	ScaleDegrees[20], ScaleDegrees[21], ScaleDegrees[22], ScaleDegrees[23], ScaleDegrees[24], ScaleDegrees[25], ScaleDegrees[26], ScaleDegrees[27], ScaleDegrees[28], ScaleDegrees[29],
	ScaleDegrees[30], ScaleDegrees[31], ScaleDegrees[32], ScaleDegrees[33], ScaleDegrees[34], ScaleDegrees[35], ScaleDegrees[36], ScaleDegrees[37], ScaleDegrees[38], ScaleDegrees[39],
	ScaleDegrees[40], ScaleDegrees[41], ScaleDegrees[42], ScaleDegrees[43], ScaleDegrees[44], ScaleDegrees[45], ScaleDegrees[46], ScaleDegrees[47], ScaleDegrees[48], ScaleDegrees[49],
	ScaleDegrees[50], ScaleDegrees[51], ScaleDegrees[52], ScaleDegrees[53], ScaleDegrees[54], ScaleDegrees[55], ScaleDegrees[56], ScaleDegrees[57], ScaleDegrees[58], ScaleDegrees[59],
	ScaleDegrees[60], ScaleDegrees[61], ScaleDegrees[62], ScaleDegrees[63], ScaleDegrees[64], ScaleDegrees[65], ScaleDegrees[66], ScaleDegrees[67], ScaleDegrees[68], ScaleDegrees[69],
	ScaleDegrees[70], ScaleDegrees[71], ScaleDegrees[72], ScaleDegrees[73], ScaleDegrees[74], ScaleDegrees[75], ScaleDegrees[76], ScaleDegrees[77], ScaleDegrees[78], ScaleDegrees[79],
	ScaleDegrees[80], ScaleDegrees[81], ScaleDegrees[82], ScaleDegrees[83], ScaleDegrees[84], ScaleDegrees[85], ScaleDegrees[86], ScaleDegrees[87], ScaleDegrees[88], ScaleDegrees[89],
	ScaleDegrees[90], ScaleDegrees[91], ScaleDegrees[92], ScaleDegrees[93], ScaleDegrees[94], ScaleDegrees[95], ScaleDegrees[96], ScaleDegrees[97], ScaleDegrees[98], ScaleDegrees[99],
	ScaleDegrees[100], ScaleDegrees[101], ScaleDegrees[102], ScaleDegrees[103], ScaleDegrees[104], ScaleDegrees[105], ScaleDegrees[106], ScaleDegrees[107], ScaleDegrees[108], ScaleDegrees[109],
	ScaleDegrees[110], ScaleDegrees[111], ScaleDegrees[112], ScaleDegrees[113], ScaleDegrees[114], ScaleDegrees[115], ScaleDegrees[116], ScaleDegrees[117], ScaleDegrees[118], ScaleDegrees[119],
	ScaleDegrees[120], ScaleDegrees[121], ScaleDegrees[122], ScaleDegrees[123], ScaleDegrees[124], ScaleDegrees[125], ScaleDegrees[126], ScaleDegrees[127], ScaleDegrees[128], ScaleDegrees[129],
	ScaleDegrees[130], ScaleDegrees[131], ScaleDegrees[132], ScaleDegrees[133], ScaleDegrees[134], ScaleDegrees[135], ScaleDegrees[136], ScaleDegrees[137], ScaleDegrees[138], ScaleDegrees[139],
	ScaleDegrees[140], ScaleDegrees[141], ScaleDegrees[142], ScaleDegrees[143], ScaleDegrees[144], ScaleDegrees[145], ScaleDegrees[146], ScaleDegrees[147], ScaleDegrees[148], ScaleDegrees[149],
	ScaleDegrees[150], ScaleDegrees[151], ScaleDegrees[152], ScaleDegrees[153], ScaleDegrees[154], ScaleDegrees[155], ScaleDegrees[156], ScaleDegrees[157], ScaleDegrees[158], ScaleDegrees[159],
	ScaleDegrees[160], ScaleDegrees[161], ScaleDegrees[162], ScaleDegrees[163], ScaleDegrees[164], ScaleDegrees[165], ScaleDegrees[166], ScaleDegrees[167], ScaleDegrees[168], ScaleDegrees[169],
	ScaleDegrees[170], ScaleDegrees[171], ScaleDegrees[172], ScaleDegrees[173], ScaleDegrees[174], ScaleDegrees[175], ScaleDegrees[176], ScaleDegrees[177], ScaleDegrees[178], ScaleDegrees[179],
	ScaleDegrees[180], ScaleDegrees[181], ScaleDegrees[182], ScaleDegrees[183], ScaleDegrees[184], ScaleDegrees[185], ScaleDegrees[186], ScaleDegrees[187], ScaleDegrees[188], ScaleDegrees[189],
	ScaleDegrees[190], ScaleDegrees[191], ScaleDegrees[192], ScaleDegrees[193], ScaleDegrees[194], ScaleDegrees[195], ScaleDegrees[196], ScaleDegrees[197], ScaleDegrees[198], ScaleDegrees[199],
	ScaleDegrees[200], ScaleDegrees[201], ScaleDegrees[202], ScaleDegrees[203], ScaleDegrees[204], ScaleDegrees[205], ScaleDegrees[206], ScaleDegrees[207], ScaleDegrees[208], ScaleDegrees[209],
	ScaleDegrees[210], ScaleDegrees[211], ScaleDegrees[212], ScaleDegrees[213], ScaleDegrees[214], ScaleDegrees[215], ScaleDegrees[216], ScaleDegrees[217], ScaleDegrees[218], ScaleDegrees[219],
	ScaleDegrees[220], ScaleDegrees[221], ScaleDegrees[222], ScaleDegrees[223], ScaleDegrees[224], ScaleDegrees[225], ScaleDegrees[226], ScaleDegrees[227], ScaleDegrees[228], ScaleDegrees[229],
	ScaleDegrees[230], ScaleDegrees[231], ScaleDegrees[232], ScaleDegrees[233], ScaleDegrees[234], ScaleDegrees[235], ScaleDegrees[236], ScaleDegrees[237], ScaleDegrees[238], ScaleDegrees[239],
	ScaleDegrees[240], ScaleDegrees[241], ScaleDegrees[242], ScaleDegrees[243], ScaleDegrees[244], ScaleDegrees[245], ScaleDegrees[246], ScaleDegrees[247], ScaleDegrees[248], ScaleDegrees[249],
	ScaleDegrees[250], ScaleDegrees[251], ScaleDegrees[252], ScaleDegrees[253], ScaleDegrees[254], ScaleDegrees[255], ScaleDegrees[256], ScaleDegrees[257], ScaleDegrees[258], ScaleDegrees[259],
	ScaleDegrees[260], ScaleDegrees[261], ScaleDegrees[262], ScaleDegrees[263], ScaleDegrees[264], ScaleDegrees[265], ScaleDegrees[266], ScaleDegrees[267], ScaleDegrees[268], ScaleDegrees[269],
	ScaleDegrees[270], ScaleDegrees[271], ScaleDegrees[272], ScaleDegrees[273], ScaleDegrees[274], ScaleDegrees[275], ScaleDegrees[276], ScaleDegrees[277], ScaleDegrees[278], ScaleDegrees[279],
	ScaleDegrees[280], ScaleDegrees[281], ScaleDegrees[282], ScaleDegrees[283], ScaleDegrees[284], ScaleDegrees[285], ScaleDegrees[286], ScaleDegrees[287], ScaleDegrees[288], ScaleDegrees[289],
	ScaleDegrees[290], ScaleDegrees[291], ScaleDegrees[292], ScaleDegrees[293], ScaleDegrees[294], ScaleDegrees[295], ScaleDegrees[296], ScaleDegrees[297], ScaleDegrees[298], ScaleDegrees[299],
	ScaleDegrees[300], ScaleDegrees[301], ScaleDegrees[302], ScaleDegrees[303], ScaleDegrees[304], ScaleDegrees[305], ScaleDegrees[306], ScaleDegrees[307], ScaleDegrees[308], ScaleDegrees[309],
	ScaleDegrees[310], ScaleDegrees[311], ScaleDegrees[312], ScaleDegrees[313], ScaleDegrees[314], ScaleDegrees[315], ScaleDegrees[316], ScaleDegrees[317], ScaleDegrees[318], ScaleDegrees[319],
	ScaleDegrees[320], ScaleDegrees[321], ScaleDegrees[322], ScaleDegrees[323], ScaleDegrees[324], ScaleDegrees[325], ScaleDegrees[326], ScaleDegrees[327], ScaleDegrees[328], ScaleDegrees[329],
	ScaleDegrees[330], ScaleDegrees[331], ScaleDegrees[332], ScaleDegrees[333], ScaleDegrees[334], ScaleDegrees[335], ScaleDegrees[336], ScaleDegrees[337], ScaleDegrees[338], ScaleDegrees[339],
	ScaleDegrees[340], ScaleDegrees[341], ScaleDegrees[342], ScaleDegrees[343], ScaleDegrees[344], ScaleDegrees[345], ScaleDegrees[346], ScaleDegrees[347], ScaleDegrees[348], ScaleDegrees[349],
	ScaleDegrees[350], ScaleDegrees[351], ScaleDegrees[352], ScaleDegrees[353], ScaleDegrees[354], ScaleDegrees[355], ScaleDegrees[356], ScaleDegrees[357], ScaleDegrees[358], ScaleDegrees[359],
	ScaleDegrees[360]
];
