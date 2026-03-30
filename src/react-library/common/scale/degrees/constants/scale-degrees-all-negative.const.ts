import { ScaleDegrees } from "../enums/scale-degrees.type";

/**
 * All degrees scale values that are negative
 * Note: includes the lower bound of 0
 */
export const SCALE_DEGREES_ALL_NEGATIVE: Array<ScaleDegrees> = [
	// Negative
	ScaleDegrees[-360], ScaleDegrees[-359], ScaleDegrees[-358], ScaleDegrees[-357], ScaleDegrees[-356], ScaleDegrees[-355], ScaleDegrees[-354], ScaleDegrees[-353], ScaleDegrees[-352], ScaleDegrees[-351],
	ScaleDegrees[-350], ScaleDegrees[-349], ScaleDegrees[-348], ScaleDegrees[-347], ScaleDegrees[-346], ScaleDegrees[-345], ScaleDegrees[-344], ScaleDegrees[-343], ScaleDegrees[-342], ScaleDegrees[-341],
	ScaleDegrees[-340], ScaleDegrees[-339], ScaleDegrees[-338], ScaleDegrees[-337], ScaleDegrees[-336], ScaleDegrees[-335], ScaleDegrees[-334], ScaleDegrees[-333], ScaleDegrees[-332], ScaleDegrees[-331],
	ScaleDegrees[-330], ScaleDegrees[-329], ScaleDegrees[-328], ScaleDegrees[-327], ScaleDegrees[-326], ScaleDegrees[-325], ScaleDegrees[-324], ScaleDegrees[-323], ScaleDegrees[-322], ScaleDegrees[-321],
	ScaleDegrees[-320], ScaleDegrees[-319], ScaleDegrees[-318], ScaleDegrees[-317], ScaleDegrees[-316], ScaleDegrees[-315], ScaleDegrees[-314], ScaleDegrees[-313], ScaleDegrees[-312], ScaleDegrees[-311],
	ScaleDegrees[-310], ScaleDegrees[-309], ScaleDegrees[-308], ScaleDegrees[-307], ScaleDegrees[-306], ScaleDegrees[-305], ScaleDegrees[-304], ScaleDegrees[-303], ScaleDegrees[-302], ScaleDegrees[-301],
	ScaleDegrees[-300], ScaleDegrees[-299], ScaleDegrees[-298], ScaleDegrees[-297], ScaleDegrees[-296], ScaleDegrees[-295], ScaleDegrees[-294], ScaleDegrees[-293], ScaleDegrees[-292], ScaleDegrees[-291],
	ScaleDegrees[-290], ScaleDegrees[-289], ScaleDegrees[-288], ScaleDegrees[-287], ScaleDegrees[-286], ScaleDegrees[-285], ScaleDegrees[-284], ScaleDegrees[-283], ScaleDegrees[-282], ScaleDegrees[-281],
	ScaleDegrees[-280], ScaleDegrees[-279], ScaleDegrees[-278], ScaleDegrees[-277], ScaleDegrees[-276], ScaleDegrees[-275], ScaleDegrees[-274], ScaleDegrees[-273], ScaleDegrees[-272], ScaleDegrees[-271],
	ScaleDegrees[-270], ScaleDegrees[-269], ScaleDegrees[-268], ScaleDegrees[-267], ScaleDegrees[-266], ScaleDegrees[-265], ScaleDegrees[-264], ScaleDegrees[-263], ScaleDegrees[-262], ScaleDegrees[-261],
	ScaleDegrees[-260], ScaleDegrees[-259], ScaleDegrees[-258], ScaleDegrees[-257], ScaleDegrees[-256], ScaleDegrees[-255], ScaleDegrees[-254], ScaleDegrees[-253], ScaleDegrees[-252], ScaleDegrees[-251],
	ScaleDegrees[-250], ScaleDegrees[-249], ScaleDegrees[-248], ScaleDegrees[-247], ScaleDegrees[-246], ScaleDegrees[-245], ScaleDegrees[-244], ScaleDegrees[-243], ScaleDegrees[-242], ScaleDegrees[-241],
	ScaleDegrees[-240], ScaleDegrees[-239], ScaleDegrees[-238], ScaleDegrees[-237], ScaleDegrees[-236], ScaleDegrees[-235], ScaleDegrees[-234], ScaleDegrees[-233], ScaleDegrees[-232], ScaleDegrees[-231],
	ScaleDegrees[-230], ScaleDegrees[-229], ScaleDegrees[-228], ScaleDegrees[-227], ScaleDegrees[-226], ScaleDegrees[-225], ScaleDegrees[-224], ScaleDegrees[-223], ScaleDegrees[-222], ScaleDegrees[-221],
	ScaleDegrees[-220], ScaleDegrees[-219], ScaleDegrees[-218], ScaleDegrees[-217], ScaleDegrees[-216], ScaleDegrees[-215], ScaleDegrees[-214], ScaleDegrees[-213], ScaleDegrees[-212], ScaleDegrees[-211],
	ScaleDegrees[-210], ScaleDegrees[-209], ScaleDegrees[-208], ScaleDegrees[-207], ScaleDegrees[-206], ScaleDegrees[-205], ScaleDegrees[-204], ScaleDegrees[-203], ScaleDegrees[-202], ScaleDegrees[-201],
	ScaleDegrees[-200], ScaleDegrees[-199], ScaleDegrees[-198], ScaleDegrees[-197], ScaleDegrees[-196], ScaleDegrees[-195], ScaleDegrees[-194], ScaleDegrees[-193], ScaleDegrees[-192], ScaleDegrees[-191],
	ScaleDegrees[-190], ScaleDegrees[-189], ScaleDegrees[-188], ScaleDegrees[-187], ScaleDegrees[-186], ScaleDegrees[-185], ScaleDegrees[-184], ScaleDegrees[-183], ScaleDegrees[-182], ScaleDegrees[-181],
	ScaleDegrees[-180], ScaleDegrees[-179], ScaleDegrees[-178], ScaleDegrees[-177], ScaleDegrees[-176], ScaleDegrees[-175], ScaleDegrees[-174], ScaleDegrees[-173], ScaleDegrees[-172], ScaleDegrees[-171],
	ScaleDegrees[-170], ScaleDegrees[-169], ScaleDegrees[-168], ScaleDegrees[-167], ScaleDegrees[-166], ScaleDegrees[-165], ScaleDegrees[-164], ScaleDegrees[-163], ScaleDegrees[-162], ScaleDegrees[-161],
	ScaleDegrees[-160], ScaleDegrees[-159], ScaleDegrees[-158], ScaleDegrees[-157], ScaleDegrees[-156], ScaleDegrees[-155], ScaleDegrees[-154], ScaleDegrees[-153], ScaleDegrees[-152], ScaleDegrees[-151],
	ScaleDegrees[-150], ScaleDegrees[-149], ScaleDegrees[-148], ScaleDegrees[-147], ScaleDegrees[-146], ScaleDegrees[-145], ScaleDegrees[-144], ScaleDegrees[-143], ScaleDegrees[-142], ScaleDegrees[-141],
	ScaleDegrees[-140], ScaleDegrees[-139], ScaleDegrees[-138], ScaleDegrees[-137], ScaleDegrees[-136], ScaleDegrees[-135], ScaleDegrees[-134], ScaleDegrees[-133], ScaleDegrees[-132], ScaleDegrees[-131],
	ScaleDegrees[-130], ScaleDegrees[-129], ScaleDegrees[-128], ScaleDegrees[-127], ScaleDegrees[-126], ScaleDegrees[-125], ScaleDegrees[-124], ScaleDegrees[-123], ScaleDegrees[-122], ScaleDegrees[-121],
	ScaleDegrees[-120], ScaleDegrees[-119], ScaleDegrees[-118], ScaleDegrees[-117], ScaleDegrees[-116], ScaleDegrees[-115], ScaleDegrees[-114], ScaleDegrees[-113], ScaleDegrees[-112], ScaleDegrees[-111],
	ScaleDegrees[-110], ScaleDegrees[-109], ScaleDegrees[-108], ScaleDegrees[-107], ScaleDegrees[-106], ScaleDegrees[-105], ScaleDegrees[-104], ScaleDegrees[-103], ScaleDegrees[-102], ScaleDegrees[-101],
	ScaleDegrees[-100], ScaleDegrees[-99], ScaleDegrees[-98], ScaleDegrees[-97], ScaleDegrees[-96], ScaleDegrees[-95], ScaleDegrees[-94], ScaleDegrees[-93], ScaleDegrees[-92], ScaleDegrees[-91],
	ScaleDegrees[-90], ScaleDegrees[-89], ScaleDegrees[-88], ScaleDegrees[-87], ScaleDegrees[-86], ScaleDegrees[-85], ScaleDegrees[-84], ScaleDegrees[-83], ScaleDegrees[-82], ScaleDegrees[-81],
	ScaleDegrees[-80], ScaleDegrees[-79], ScaleDegrees[-78], ScaleDegrees[-77], ScaleDegrees[-76], ScaleDegrees[-75], ScaleDegrees[-74], ScaleDegrees[-73], ScaleDegrees[-72], ScaleDegrees[-71],
	ScaleDegrees[-70], ScaleDegrees[-69], ScaleDegrees[-68], ScaleDegrees[-67], ScaleDegrees[-66], ScaleDegrees[-65], ScaleDegrees[-64], ScaleDegrees[-63], ScaleDegrees[-62], ScaleDegrees[-61],
	ScaleDegrees[-60], ScaleDegrees[-59], ScaleDegrees[-58], ScaleDegrees[-57], ScaleDegrees[-56], ScaleDegrees[-55], ScaleDegrees[-54], ScaleDegrees[-53], ScaleDegrees[-52], ScaleDegrees[-51],
	ScaleDegrees[-50], ScaleDegrees[-49], ScaleDegrees[-48], ScaleDegrees[-47], ScaleDegrees[-46], ScaleDegrees[-45], ScaleDegrees[-44], ScaleDegrees[-43], ScaleDegrees[-42], ScaleDegrees[-41],
	ScaleDegrees[-40], ScaleDegrees[-39], ScaleDegrees[-38], ScaleDegrees[-37], ScaleDegrees[-36], ScaleDegrees[-35], ScaleDegrees[-34], ScaleDegrees[-33], ScaleDegrees[-32], ScaleDegrees[-31],
	ScaleDegrees[-30], ScaleDegrees[-29], ScaleDegrees[-28], ScaleDegrees[-27], ScaleDegrees[-26], ScaleDegrees[-25], ScaleDegrees[-24], ScaleDegrees[-23], ScaleDegrees[-22], ScaleDegrees[-21],
	ScaleDegrees[-20], ScaleDegrees[-19], ScaleDegrees[-18], ScaleDegrees[-17], ScaleDegrees[-16], ScaleDegrees[-15], ScaleDegrees[-14], ScaleDegrees[-13], ScaleDegrees[-12], ScaleDegrees[-11],
	ScaleDegrees[-10], ScaleDegrees[-9], ScaleDegrees[-8], ScaleDegrees[-7], ScaleDegrees[-6], ScaleDegrees[-5], ScaleDegrees[-4], ScaleDegrees[-3], ScaleDegrees[-2], ScaleDegrees[-1],

	// None
	ScaleDegrees[0]
];
