import { Source2Demo } from './demo';
import { testProto } from './test_protobufs';
/*export class Source2DemoParser {
	parse(binaryReader) {
		console.log(binaryReader);
	}

	#parseHeader
}*/


export function ParseDemo(reader) {
	const demo = new Source2Demo();
	console.log(reader);
	parseHeader(reader, demo);

	console.log(demo);
	return demo;
}

function parseHeader(reader, demo) {
	//reader.skip(8);//MAGIC TODO: check it ?
	const magic = reader.getString(8);
	console.log(magic);

	demo.magic = magic;

	reader.seek(8);
	const fileInfoOffset = reader.getUint32();
	demo.length2 = reader.getUint32();
	console.info(fileInfoOffset, demo.length2);

	testProto(reader);


}
